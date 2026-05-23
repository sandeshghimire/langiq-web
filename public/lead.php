<?php
declare(strict_types=1);

// ── CORS + preflight ─────────────────────────────────────────────────────────
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ── Mail configuration ───────────────────────────────────────────────────────
define('MAIL_FROM', 'info@siliconcentric.com');
define('MAIL_TO',   'info@siliconcentric.com');

// SMTP fallback (used only if PHP mail() fails)
define('SMTP_HOST', 'mail.siliconcentric.com');
define('SMTP_PORT', 465);
define('SMTP_USER', 'info@siliconcentric.com');
define('SMTP_PASS', '9K2Q6oFSkmwco8rh!');

define('LOG_FILE', __DIR__ . '/lead.log');

function lead_log(string $msg): void
{
    @file_put_contents(LOG_FILE, '[' . date('c') . "] " . $msg . "\n", FILE_APPEND);
}

// ── Mail transports ──────────────────────────────────────────────────────────

/** PHP's built-in mail() via local sendmail. Preferred on shared hosting. */
function send_via_mail(string $subject, string $body): bool
{
    $headers  = 'From: siliconcentric <' . MAIL_FROM . ">\r\n";
    $headers .= 'Reply-To: ' . MAIL_FROM . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();

    $encSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $ok = @mail(MAIL_TO, $encSubject, $body, $headers, '-f' . MAIL_FROM);
    lead_log('mail() result: ' . ($ok ? 'ok' : 'fail'));
    return $ok;
}

function smtp_read($fp): array
{
    $resp = '';
    $code = 0;
    while (($line = fgets($fp, 1024)) !== false) {
        $resp .= $line;
        if (!isset($line[3]) || $line[3] === ' ') {
            $code = (int) substr($line, 0, 3);
            break;
        }
    }
    return [$code, $resp];
}

function smtp_cmd($fp, string $cmd): array
{
    fwrite($fp, $cmd . "\r\n");
    return smtp_read($fp);
}

/** SMTP fallback over implicit SSL (port 465). */
function send_via_smtp(string $subject, string $body): bool
{
    $ctx = stream_context_create([
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true,
        ],
    ]);

    $fp = @stream_socket_client(
        'ssl://' . SMTP_HOST . ':' . SMTP_PORT,
        $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx
    );

    if (!$fp) {
        lead_log("smtp connect failed: [$errno] $errstr");
        return false;
    }

    stream_set_timeout($fp, 15);

    [$code] = smtp_read($fp);                                            if ($code !== 220) { lead_log("smtp greeting: $code"); fclose($fp); return false; }
    [$code] = smtp_cmd($fp, 'EHLO ' . (gethostname() ?: 'localhost'));   if ($code !== 250) { lead_log("smtp ehlo: $code");     fclose($fp); return false; }
    [$code] = smtp_cmd($fp, 'AUTH LOGIN');                               if ($code !== 334) { lead_log("smtp auth: $code");     fclose($fp); return false; }
    [$code] = smtp_cmd($fp, base64_encode(SMTP_USER));                   if ($code !== 334) { lead_log("smtp user: $code");     fclose($fp); return false; }
    [$code] = smtp_cmd($fp, base64_encode(SMTP_PASS));                   if ($code !== 235) { lead_log("smtp pass: $code");     fclose($fp); return false; }
    [$code] = smtp_cmd($fp, 'MAIL FROM:<' . MAIL_FROM . '>');            if ($code !== 250) { lead_log("smtp mailfrom: $code"); fclose($fp); return false; }
    [$code] = smtp_cmd($fp, 'RCPT TO:<' . MAIL_TO . '>');                if ($code !== 250) { lead_log("smtp rcptto: $code");   fclose($fp); return false; }
    [$code] = smtp_cmd($fp, 'DATA');                                     if ($code !== 354) { lead_log("smtp data: $code");     fclose($fp); return false; }

    $msg  = 'From: siliconcentric <' . MAIL_FROM . ">\r\n";
    $msg .= 'To: ' . MAIL_TO . "\r\n";
    $msg .= 'Subject: =?UTF-8?B?' . base64_encode($subject) . "?=\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $msg .= "Content-Transfer-Encoding: 8bit\r\n";
    $msg .= "\r\n" . $body . "\r\n.\r\n";

    fwrite($fp, $msg);
    [$code] = smtp_read($fp);                                            if ($code !== 250) { lead_log("smtp body: $code");     fclose($fp); return false; }
    smtp_cmd($fp, 'QUIT');
    fclose($fp);

    lead_log('smtp: ok');
    return true;
}

function send_mail(string $subject, string $body): bool
{
    if (send_via_mail($subject, $body)) {
        return true;
    }
    return send_via_smtp($subject, $body);
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

$body  = "New contact request — ivv.siliconcentric.com\n";
$body .= str_repeat('-', 44) . "\n";
$body .= "Name    : {$name}\n";
$body .= "Company : {$company}\n";
$body .= "Email   : {$email}\n";
if ($phone)   $body .= "Phone   : {$phone}\n";
if ($message) $body .= "\nMessage :\n{$message}\n";

$ok = send_mail("IV&V Lead: {$name} — {$company}", $body);

if (!$ok) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail delivery failed — please email info@siliconcentric.com directly']);
    exit;
}

echo json_encode(['ok' => true]);
