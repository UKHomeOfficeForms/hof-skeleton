'use strict';

const SummaryPageBehaviour = require('hof').components.summary;

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
    '/confirm': {
      behaviours: [SummaryPageBehaviour],
      sections: require('./sections/summary-data-sections'),
      next: '/confirmation'
    },
    '/confirmation': {
      backLink: false
    }
  }
};
