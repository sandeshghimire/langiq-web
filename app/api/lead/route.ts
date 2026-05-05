import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
    type: "demo";
    name?: string;
    email?: string;
    company?: string;
    notes?: string;
    scheduledDate?: string; // YYYY-MM-DD
    scheduledTime?: string; // HH:MM
}

// Allowlist of valid time slots to prevent injection via the scheduledTime field
const VALID_TIME_SLOTS = new Set(["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]);

export async function POST(request: NextRequest) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    const payload = body as LeadPayload;

    if (payload.type !== "demo") {
        return NextResponse.json({ ok: false, error: "Invalid type" }, { status: 400 });
    }

    // Validate required fields
    if (!payload.name || !payload.email || !payload.company) {
        return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
        return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 422 });
    }

    // Validate scheduled date format (YYYY-MM-DD)
    if (payload.scheduledDate && !/^\d{4}-\d{2}-\d{2}$/.test(payload.scheduledDate)) {
        return NextResponse.json({ ok: false, error: "Invalid date format" }, { status: 422 });
    }

    // Validate time slot against allowlist
    if (payload.scheduledTime && !VALID_TIME_SLOTS.has(payload.scheduledTime)) {
        return NextResponse.json({ ok: false, error: "Invalid time slot" }, { status: 422 });
    }

    // Log the lead (v1 — no email sending)
    console.log("[IV&V Lead]", JSON.stringify({
        type: payload.type,
        name: payload.name,
        email: payload.email,
        company: payload.company,
        scheduledDate: payload.scheduledDate,
        scheduledTime: payload.scheduledTime,
        notes: payload.notes,
    }));

    return NextResponse.json({ ok: true });
}
