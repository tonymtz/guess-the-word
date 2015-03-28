/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  ginject = require('gulp-inject'),
  gAngularFilesort = require('gulp-angular-filesort'),
  eventStream = require('event-stream'),
  env = gutil.env;

gulp.task('inject', ['jade', 'install'], function() {
  var vendorSources = gulp.src(env.getRoute('bower_components', 'build/lib/'), {read: false}),
    sources = eventStream.merge(
      gulp.src(env.buildDir + '/css/**/*.css'),
      gulp.src(env.buildDir + '/js/**/*.js').pipe(gAngularFilesort())
    );

  return gulp.src(env.buildDir + '/index.html')
    .pipe(ginject(vendorSources, {name: 'vendors', ignorePath: env.buildDir, addRootSlash: false}))
    .pipe(ginject(sources, {ignorePath: env.buildDir, addRootSlash: false}))
    .pipe(gulp.dest(env.buildDir));
});
