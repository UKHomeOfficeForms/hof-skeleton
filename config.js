'use strict';
/* eslint no-process-env: 0 */

const env = process.env.NODE_ENV || 'production';


module.exports = {
    env: env,
    PRETTY_DATE_FORMAT: 'Do MMMM YYYY',
    sessionDefaults: {
        steps: ['/start','/welcome'],
        fields: ['welcome-textbox']
    }

}
