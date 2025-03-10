"use client";

import ContentDetailView from '../../../components/content/ContentDetailView';

export default function ApplicationPage() {
    return (
        <ContentDetailView
            backLinkUrl="/applications"
            backLinkText="Back to Applications"
            apiEndpoint="/api/applications"
            contentType="Application"
        />
    );
}
