module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],

        files: [
            './**/*.ts'
        ],

        exclude: [
            './node_modules/**/*.ts'
        ],

        preprocessors: {
            "./**/*.ts": "karma-typescript"
        },

        browsers:  ['Chrome'],

        autoWatch: true,

        plugins: [
            'karma-jasmine',
            'karma-typescript',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ]
    })
}