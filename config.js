'use strict';

exports.__esModule = true;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var JSONReporter = require('jasmine-json-test-reporter');
// var json = require('./package.json');
// var path = require('path');
exports.config = {
    // seleniumServerJar: path.resolve(__dirname, 'jar/selenium-server-standalone-' + json.version + '.jar'),

    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    verboseMultiSessions: true,
    multiCapabilities: [
        // {
        //    browserName: 'firefox',
        //    marionette: 'true'
        // }
        // ,
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ['disable-infobars']
            }
        }
        // {
        //     browserName: 'internet explorer',
        //     version: '11'
        //}
    ],
    localSeleniumStandaloneOpts: {
        jvmArgs: [
            '-Dwebdriver.ie.driver=node_modules/webdriver-manager/selenium/IEDriverServer3.4.0.exe'
        ]
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 25 * 60 * 1000,
        includeStackTrace: true
    },
    allScriptsTimeout: 30 * 60 * 1000,
    specs: ['e2e/test/docketTestSuite.js'],
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'tsconfig.json'
        });
    },
    onPrepare: function () {
        browser.driver
            .manage()
            .window()
            .maximize();
        var { SpecReporter } = require('jasmine-spec-reporter');
        var HTMLReport = require('protractor-html-reporter');
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        var jasminetag = require('jasmine2-tagged');
        var jasmineENV = jasmine.getEnv();
        jasmine.getEnv().addReporter(
            new SpecReporter({
                displayStacktrace: 'all',
                displaySuccessesSummary: true, // display summary of all successes after execution
                displayFailuresSummary: true, // display summary of all failures after execution
                displayPendingSummary: true, // display summary of all pending specs after execution
                displaySuccessfulSpec: true, // display each successful spec
                displayFailedSpec: true, // display each failed spec
                displayPendingSpec: true, // display each pending spec
                displaySpecDuration: true, // display each spec duration
                displaySuiteNumber: true, // display each suite number (hierarchical)
                colors: {
                    success: 'green',
                    failure: 'red',
                    pending: 'yellow'
                },
                prefixes: {
                    success: '✓ ',
                    failure: '✗ ',
                    pending: '* '
                }
            })
        );
        var currentDate = new Date();
        var today = new Date();
        var timeStamp =
            today.getMonth() +
            1 +
            '-' +
            today.getDate() +
            '-' +
            today.getFullYear() +
            '-' +
            today.getHours() +
            'h-' +
            today.getMinutes() +
            'm';
        // return new Promise(function (fulfill, reject) {
        //     browser.getCapabilities().then(function (value) {
        //         var reportName = 'UIAutomation' + '_' + value.get('browserName');
                
        //         jasmine.getEnv().addReporter(
        //             new Jasmine2HtmlReporter({
        //                 savePath:
        //                     'reports/' +
        //                     browser.params.reportsFolder +
        //                     '/' +
        //                     browser.params.suiteName,
        //                 docTitle: 'Web UI Test Report',
        //                 screenshotsFolder: '/screenshots',
        //                 takeScreenshotsOnlyOnFailures: true,
        //                 consolidate: true,
        //                 consolidateAll: true,
        //                 preserveDirectory: true,
        //                 fileName: 'report.html',
        //                 fileNamePrefix: reportName
        //             })
        //         );
        //         jasmine.getEnv().addReporter(
        //             new JSONReporter({
        //                 file:
        //                     'reports/' +
        //                     browser.params.reportsFolder +
        //                     '/' +
        //                     browser.params.suiteName +
        //                     '/' +
        //                     reportName +
        //                     '-' +
        //                     'report.json',
        //                 beautify: true,
        //                 indentationLevel: 4 // used if beautify === true
        //             })
        //         );
        //         fulfill();
        //     });
        // });
    },
    useAllAngular2AppRoots: true
};
