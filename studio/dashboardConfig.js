export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6363c8dcde31030740e0304a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3zowz242',
                  apiId: '7a418372-9170-49d6-afbc-855940df4723'
                },
                {
                  buildHookId: '6363c8dcbcb51d0708bb11a6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s8eq8ppt',
                  apiId: '5146cfe2-c5eb-4955-9f17-2fc3bc946916'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielGuardado/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s8eq8ppt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
