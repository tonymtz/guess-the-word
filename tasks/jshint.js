/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  env = gutil.env;

gulp.task('jshint', function() {
  return gulp.src(env.getRoute('scripts'))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
