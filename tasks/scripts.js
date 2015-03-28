/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  env = gutil.env,
  uglify,
  concat,
  gAngularFilesort;

gulp.task('scripts', ['jshint', 'scripts:tests', 'config'], function() {
  var buildDirectory = env.buildDir + '/js',
    stream;

  if (env.mode === 'prod') {
    gAngularFilesort = require('gulp-angular-filesort');
    uglify = require('gulp-uglify');
    concat = require('gulp-concat');
    stream = gulp.src(env.getRoute('scripts'))
      .pipe(gAngularFilesort())
      .pipe(concat('huddy.min.js'))
      .pipe(gulp.dest(buildDirectory))
      .pipe(uglify({outSourceMap: true}))
      .pipe(gulp.dest(buildDirectory));
  } else {
    stream = gulp.src(env.getRoute('scripts'))
      .pipe(gulp.dest(buildDirectory));
  }

  return stream;
});

gulp.task('scripts:tests', function() {
  var buildDirectory = env.buildDir + '/tests',
    stream;

  stream = gulp.src(env.getRoute('tests'))
    .pipe(gulp.dest(buildDirectory));

  return stream;
});
