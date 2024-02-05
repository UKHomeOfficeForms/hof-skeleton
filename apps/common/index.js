'use strict';

module.exports = {
  name: 'common',
  steps: {
    '/start': {
      template: 'start',
      next: 'hof/welcome'
    }
  }
};
