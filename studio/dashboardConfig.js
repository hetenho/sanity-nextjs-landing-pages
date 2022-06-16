export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62aafe3f9d56b56598335fd8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-61o5ud4j',
                  apiId: 'd59c445e-0868-458c-aee7-3343f7a10c77'
                },
                {
                  buildHookId: '62aafe40706f0165be3a40ae',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eufn9wyt',
                  apiId: '8deae063-5bc4-46e6-bd00-0dde023f0ce0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hetenho/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eufn9wyt.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
