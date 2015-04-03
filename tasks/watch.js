/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  livereload = require('gulp-livereload'),
  env = gutil.env;

gulp.task('watch', ['assets', 'jshint', 'install', 'scripts', 'stylus', 'inject'], function() {
  livereload.listen();
  gulp.watch(env.getRoute('assets'), ['assets']).on('change', livereload.changed);
  gulp.watch(env.getRoute('views'), ['inject']).on('change', livereload.changed);
  gulp.watch(env.getRoute('scripts'), ['jshint', 'scripts']).on('change', livereload.changed);
  gulp.watch(env.getRoute('stylus'), ['stylus']).on('change', livereload.changed);
});
