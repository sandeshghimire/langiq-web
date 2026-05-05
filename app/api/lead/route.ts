import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
    type: "demo" | "brief";
    email?: string;
    company?: string;
    platform?: string;
}

export async function POST(request: NextRequest) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    const payload = body as LeadPayload;

    // Validate type field
    if (payload.type !== "demo" && payload.type !== "brief") {
        return NextResponse.json(
            { ok: false, error: "Invalid type" },
            { status: 400 }
        );
    }

    // Log the lead (v1 — no email sending)
    console.log("[IV&V Lead]", JSON.stringify(payload));

    return NextResponse.json({ ok: true });
}
