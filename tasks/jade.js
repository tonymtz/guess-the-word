/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jade = require('gulp-jade'),
  env = gutil.env;

gulp.task('jade', function() {
  return gulp.src(env.getRoute('views'))
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest(env.buildDir));
});
