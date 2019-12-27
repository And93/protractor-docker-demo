module.exports.config = {

    getPageTimeout: 150000,
    allScriptsTimeout: 180000,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--remote-debugging-port=9222',
                // '--whitelisted-ips=0.0.0.0',
            ],
        },
    },

    specs: [
        './src/tests/**/*.js'
    ],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 200000,
        includeStackTrace: true,
        isVerbose: true,
    },
};
