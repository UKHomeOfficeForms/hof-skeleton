'use strict';

module.exports = {
    'welcome-textbox': {
        mixin: 'input-text',
        validate: ['notUrl', { type: 'maxlength', arguments: 50 }]
      },
};
