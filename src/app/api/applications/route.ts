import { NextRequest, NextResponse } from 'next/server';
import { getAllApplications } from '@/lib/applications';

export async function GET(req: NextRequest) {
    try {
        const applications = await getAllApplications();
        return NextResponse.json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        return NextResponse.json(
            {
                error: 'Failed to fetch applications',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
