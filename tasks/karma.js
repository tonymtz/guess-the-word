/*
 * Huddy Me
 */

var gulp = require('gulp'),
  karma = require('karma').server,
  gutil = require('gulp-util'),
  env = gutil.env;

/**
 * Run test once and exit
 */
gulp.task('karma', ['all'], function(done) {
  // TODO - tony - fix this ugly path
  var configFile = __dirname + '/../build/tests/karma.conf.js';

  return karma.start({
    configFile: configFile,
    singleRun: true
  }, done);
});
