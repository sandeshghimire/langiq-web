import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
    type: "connect";
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    message?: string;
}

export async function POST(request: NextRequest) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    const payload = body as LeadPayload;

    if (payload.type !== "connect") {
        return NextResponse.json({ ok: false, error: "Invalid type" }, { status: 400 });
    }

    // Validate required fields
    if (!payload.name || !payload.email || !payload.company) {
        return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
    }

    // Field length limits
    if (payload.name.length > 100 || payload.company.length > 100) {
        return NextResponse.json({ ok: false, error: "Field too long" }, { status: 422 });
    }
    if (payload.email.length > 254) {
        return NextResponse.json({ ok: false, error: "Field too long" }, { status: 422 });
    }
    if (payload.message && payload.message.length > 2000) {
        return NextResponse.json({ ok: false, error: "Message too long" }, { status: 422 });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
        return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 422 });
    }

    // Sanitise phone: digits, spaces, +, -, (, ) only
    if (payload.phone && !/^[\d\s\+\-\(\)]{0,32}$/.test(payload.phone)) {
        return NextResponse.json({ ok: false, error: "Invalid phone number" }, { status: 422 });
    }

    // Log the lead (v1 — no email sending)
    console.log("[IV&V Lead]", JSON.stringify({
        type: payload.type,
        name: payload.name,
        email: payload.email,
        company: payload.company,
        phone: payload.phone,
        message: payload.message,
    }));

    return NextResponse.json({ ok: true });
}
