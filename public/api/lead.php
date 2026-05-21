<?php
// Moved to /lead.php
header('Location: /lead.php', true, 308);
exit;

define('SMTP_PORT', 465);
define('SMTP_USER', 'info@soccentric.com');
define('SMTP_PASS', '9K2Q6oFSkmwco8rh!');
define('MAIL_FROM', 'info@soccentric.com');
define('MAIL_TO',   'info@soccentric.com');
// ─────────────────────────────────────────────────────────────────────────────

/** Read a (possibly multi-line) SMTP response. */
function smtp_read($fp): string
{
    $resp = '';
    while (($line = fgets($fp, 512)) !== false) {
        $resp .= $line;
        // RFC 5321 §4.5.3: continuation lines have '-' at pos 3; final line has ' '
        if (!isset($line[3]) || $line[3] === ' ') {
            break;
        }
    }
    return $resp;
}

/** Write a command and return the server response. */
function smtp_cmd($fp, string $cmd): string
{
    fwrite($fp, $cmd . "\r\n");
    return smtp_read($fp);
}

/** Send an email via SMTP over implicit SSL (port 465). */
function send_mail(string $subject, string $body): bool
{
    $ctx = stream_context_create([
        'ssl' => [
            'verify_peer'      => true,
            'verify_peer_name' => true,
        ],
    ]);

    $fp = @stream_socket_client(
        'ssl://' . SMTP_HOST . ':' . SMTP_PORT,
        $errno,
        $errstr,
        15,
        STREAM_CLIENT_CONNECT,
        $ctx
    );

    if (!$fp) {
        return false;
    }

    smtp_read($fp);                                          // 220 greeting
    smtp_cmd($fp, 'EHLO ' . (gethostname() ?: 'localhost')); // EHLO
    smtp_cmd($fp, 'AUTH LOGIN');                             // start AUTH
    smtp_cmd($fp, base64_encode(SMTP_USER));                 // username
    smtp_cmd($fp, base64_encode(SMTP_PASS));                 // password
    smtp_cmd($fp, 'MAIL FROM:<' . MAIL_FROM . '>');
    smtp_cmd($fp, 'RCPT TO:<' . MAIL_TO . '>');
    smtp_cmd($fp, 'DATA');

    $encoded_subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $msg  = 'From: SoCcentric <' . MAIL_FROM . ">\r\n";
    $msg .= 'To: ' . MAIL_TO . "\r\n";
    $msg .= 'Subject: ' . $encoded_subject . "\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $msg .= "Content-Transfer-Encoding: 8bit\r\n";
    $msg .= "\r\n" . $body . "\r\n.\r\n";

    fwrite($fp, $msg);
    smtp_read($fp); // 250 Message accepted
    smtp_cmd($fp, 'QUIT');
    fclose($fp);

    return true;
}

// ── Request handling ─────────────────────────────────────────────────────────

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$data = json_decode((string) file_get_contents('php://input'), true);

if (!is_array($data) || ($data['type'] ?? '') !== 'connect') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request']);
    exit;
}

$name    = trim((string) ($data['name']    ?? ''));
$email   = trim((string) ($data['email']   ?? ''));
$company = trim((string) ($data['company'] ?? ''));
$phone   = trim((string) ($data['phone']   ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if (!$name || !$email || !$company) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}
if (strlen($name) > 100 || strlen($company) > 100) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Field too long']);
    exit;
}
if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}
if ($phone && !preg_match('/^[\d\s+\-()]{0,32}$/', $phone)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid phone number']);
    exit;
}
if (strlen($message) > 2000) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Message too long']);
    exit;
}

$body  = "New contact request — ivv.soccentric.com\n";
$body .= str_repeat('-', 44) . "\n";
$body .= "Name    : {$name}\n";
$body .= "Company : {$company}\n";
$body .= "Email   : {$email}\n";
if ($phone)   $body .= "Phone   : {$phone}\n";
if ($message) $body .= "\nMessage :\n{$message}\n";

$ok = send_mail("IV&V Lead: {$name} — {$company}", $body);

if (!$ok) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail delivery failed — please email info@soccentric.com directly']);
    exit;
}

echo json_encode(['ok' => true]);
