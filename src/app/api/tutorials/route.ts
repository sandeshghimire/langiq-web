import { NextResponse } from 'next/server';
import { getAllTutorials, getTutorialBySlug } from '../../../../lib/tutorials';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
        const tutorial = getTutorialBySlug(slug);

        if (!tutorial) {
            return NextResponse.json(
                { error: 'Tutorial not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ tutorial });
    }

    const tutorials = getAllTutorials();
    return NextResponse.json({ tutorials });
}
