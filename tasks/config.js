/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  env = gutil.env,
  replace = require('gulp-replace-task'),
  gRename = require('gulp-rename');

var ngConstant = require('gulp-ng-constant');

gulp.task('config', function() {
  var buildDirectory = env.buildDir + '/js';

  gulp.src('./apps/env/' + env.mode + '.json')
    .pipe(ngConstant({
      name: env.bundles.app + '.config'
    }))
    .pipe(gRename('app.constants.js'))
    .pipe(gulp.dest(buildDirectory));
});
