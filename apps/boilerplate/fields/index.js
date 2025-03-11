module.exports = {
    'name' : {
        mixin: 'input-text',
        validate: ['required', 'notUrl'],
        labelClassName: 'govuk-label--s',
        className: ['govuk-input', 'govuk-!-width-two-thirds']
    },
    'image': {
        mixin: 'input-file',
        labelClassName: 'visuallyhidden'
    }
}