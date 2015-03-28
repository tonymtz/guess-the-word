/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  del = require('del'),
  env = gutil.env;

gulp.task('clean', [], function(cb) {
  del(env.buildDir, cb);
});

gulp.task('clean:styles', [], function(cb) {
  del(env.buildDir + '/css', cb);
});

gulp.task('clean:views', [], function(cb) {
  del([env.buildDir + '/partials'], cb);
});

gulp.task('clean:scripts', [], function(cb) {
  del(env.buildDir + '/js', cb);
});
