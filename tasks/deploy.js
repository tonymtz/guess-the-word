/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  env = gutil.env;

gulp.task('deploy', ['install', 'scripts', 'stylus', 'inject'], function() {
  gulp.src(env.buildDir)
});