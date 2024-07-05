
module.exports = {
    name: 'HOF Skeleton',
    baseUrl: '/',
    steps: {
        '/start': {
            next: '/name',
        },
        '/name': {
            next: '/confirmation',
        },
        '/confirmation': {
            behaviours: [],
            backLink: false
        }
    }
}