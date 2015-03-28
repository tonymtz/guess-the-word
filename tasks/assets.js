/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  env = gutil.env;

gulp.task('assets', function() {
  return gulp.src(env.getRoute('assets'))
    .pipe(gulp.dest(env.buildDir));
});