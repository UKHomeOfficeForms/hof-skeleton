const hof = require('hof');
const summary = hof.components.summary;
const config = require('../../config');
const caseworkerEmail = require('./behaviours/caseworker-email')(config.email);
const SaveImage = require('./behaviours/save-image');
const RemoveImage = require('./behaviours/remove-image');
const LimitDocument = require('./behaviours/limit-documents');

module.exports = {
    name: 'HOF Skeleton',
    fields: 'apps/boilerplate/fields',
    views: 'apps/boilerplate/views',
    translations: 'apps/boilerplate/translations',
    baseUrl: '/',
    steps: {
        '/start': {
            next: '/name',
        },
        '/name': {
            fields: ['name'],
            next: '/upload',
        },
        '/upload': {
            behaviours: [SaveImage('image'), RemoveImage, LimitDocument],
            fields: ['image'],
            next: '/confirm',
        },
        '/confirm': {
            behaviours: ['complete', summary, caseworkerEmail],
            next: '/complete'

        },
        '/complete': {
            backLink: false
        }
    }
}