const hof = require('hof');
const summary = hof.components.summary;

module.exports = {
  name: 'HOF Skeleton',
  fields: 'apps/boilerplate/fields',
  views: 'apps/boilerplate/views',
  translations: 'apps/boilerplate/translations',
  baseUrl: '/',
  steps: {
    '/name': {
      fields: ['name'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', summary],
      next: '/complete'
    },
    '/complete': {}
  }
};
