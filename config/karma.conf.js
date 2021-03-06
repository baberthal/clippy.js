// Karma configuration
// Generated on Wed Jun 29 2016 12:53:56 GMT-0600 (MDT)
/* eslint node: true */
'use strict';

module.exports = function(config) {
  var getBrowsers = function() {
    var env = require('./env');
    if (env.test()) {
      return [
        'Chrome',
        'PhantomJS',
        'Firefox',
        'Safari',
      ];
    } else {
      return ['PhantomJS'];
    }
  };

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https:/r/npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: ['node_modules/jquery/dist/jquery.js', 'test/index.js'],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors:
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.js': ['webpack'],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {
          type: 'html',
        },
        {
          type: 'text-summary',
        },
      ],
    },

    webpack: require('./webpack.karma.config'),

    plugins: [
      'karma-coverage',
      'istanbul-instrumenter-loader',
      'karma-webpack',
      'karma-jasmine-ajax',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
    ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    // config.LOG_WARN
    // || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file
    // changes
    autoWatch: false,

    // start these browsers
    // available browser launchers:
    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: getBrowsers(),

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
