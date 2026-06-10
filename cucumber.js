module.exports = {
    default: {
        paths: [
            'tests/features/login.feature'
        ],
        require: [
            'tests/stepdefinition/loginsteps.js',
            'tests/support/hooks.js'
        ],
        format: ['progress'],
        timeout: 60000
    }
};
