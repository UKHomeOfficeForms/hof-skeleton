'use strict';

module.exports = {
  name: 'hof-project',
  params: '/:action?/:id?/:edit?',
  baseUrl: '/hof',
  steps: {
    '/welcome': {
      fields: ['welcome-textbox'],
      backLink: '/start',
      next: '/confirm'
    },
    "/confirm": {}

  }
};
