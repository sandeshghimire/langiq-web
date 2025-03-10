"use client";

import ContentDetailView from '../../../components/content/ContentDetailView';

export default function ArticlePage() {
    return (
        <ContentDetailView
            backLinkUrl="/articles"
            backLinkText="Back to Articles"
            apiEndpoint="/api/articles"
            contentType="Article"
        />
    );
}
