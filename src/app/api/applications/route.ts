import { NextResponse } from 'next/server';
import { getAllApplications } from '@/lib/applications';

export async function GET() {
    try {
        const applications = getAllApplications();
        return NextResponse.json({ applications });
    } catch (error) {
        console.error('Error fetching applications:', error);
        return NextResponse.json(
            { error: 'Failed to load applications', message: (error as Error).message },
            { status: 500 }
        );
    }
}
