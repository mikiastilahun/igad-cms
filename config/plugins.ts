export default ({ env }) => ({
    // ...
    'strapi-algolia': {
        enabled: true,
        config: {
            apiKey: env('ALGOLIA_ADMIN_KEY'),
            applicationId: env('ALGOLIA_APP_ID'),
            indexPrefix: env('ALGOLIA_INDEX_PREFIX'),
            contentTypes: [
                { name: 'api::article.article', index: 'news' },
                { name: 'api::event.event', index: 'events' },
                { name: 'api::project.project', index: 'projects' },
                { name: 'api::publication.publication', index: 'publications' },
                { name: 'api::priority-area.priority-area', index: 'priority-area' },

            ],
        },
    },
});