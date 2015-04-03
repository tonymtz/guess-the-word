module.exports = function(config) {
  'use strict';

  config.set({

    basePath: '../',

    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      'lib/angular/angular.js',
      'lib/angular-ui-router/release/angular-ui-router.js',
      'lib/angular-translate/angular-translate.js',
      '../../node_modules/angular-mocks/angular-mocks.js',
      'js/app.js',
      'js/**/*.js',
      '**/*.mocha.js'
    ],

    exclude: [
      '**/main.js'
    ],

    reporters: ['coverage', 'dots', 'junit'],

    junitReporter: {
      outputFile: 'test-results.xml'
    },

    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'cobertura', subdir: '../', file: 'cobertura.txt'},
        {type: 'text-summary', subdir: '../', file: 'text-summary.txt'}
      ]
    },

    preprocessors: {
      'js/**/*.js': ['coverage']
    },

    port: 9876,

    colors: true,

    autoWatch: true,

    singleRun: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS']

  });
};