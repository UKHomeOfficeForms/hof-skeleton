'use strict';

module.exports = {
  'welcome-textbox': {
    mixin: 'input-text',
    validate: ['notUrl', 'required', { type: 'maxlength', arguments: 50 }]
  }
};
