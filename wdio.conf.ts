exports.config={
    runner:'local',
    specs: [
        './src/tests/**/*.test.ts'
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    framework: 'mocha',
    waitforTimeout: 100000,
    mochaOpts: {
        timeout: 50000
    },
    reporter:'dot',
    services:['chromedriver'],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    }

}