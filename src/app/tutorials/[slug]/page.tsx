"use client";

import ContentDetailView from '../../../components/content/ContentDetailView';

export default function TutorialPage() {
    return (
        <ContentDetailView
            backLinkUrl="/tutorials"
            backLinkText="Back to Tutorials"
            apiEndpoint="/api/tutorials"
            contentType="Tutorial"
        />
    );
}
