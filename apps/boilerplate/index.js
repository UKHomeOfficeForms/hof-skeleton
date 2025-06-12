module.exports = {
  name: 'HOF Skeleton',
  fields: 'apps/boilerplate/fields',
  views: 'apps/boilerplate/views',
  translations: 'apps/boilerplate/translations',
  baseUrl: '/',
  steps: {
    '/start': {
      next: '/name'
    },
    '/name': {
      fields: ['name'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete'],
      next: '/complete'
    },
    '/complete': {
      backLink: false
    }
  }
};
