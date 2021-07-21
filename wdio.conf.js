
user= process.env.LT_USERNAME || "your_usename",
key= process.env.LT_ACCESS_KEY || "your_key",

exports.config = {
    user,
    key,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],

    capabilities: [{   

        name: "DeepSelectors Testing",
        build: "DeepSelectors",
        maxInstances: 5,
        browserName: 'chrome',
        version:"64.0",
        acceptInsecureCerts: true,
        network: true,
        video: true,
        visual: true,
        console: true,

    }],

    logFile : './logDir/api.log',
    services: [
        ['lambdatest', {
            tunnel: true
        }]
    ],
    hostname: 'hub.lambdatest.com',
    path: '/wd/hub',
    port: 80,

    baseUrl: '',
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    } 
}
