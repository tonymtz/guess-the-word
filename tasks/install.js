/*
 * Huddy Me
 */

var gulp = require('gulp'),
  bower = require('gulp-bower'),
  gutil = require('gulp-util'),
  env = gutil.env;

gulp.task('install', function() {
  return bower({cwd: './app'});
});
