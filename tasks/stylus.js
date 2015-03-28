/*
 * Huddy Me
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  stylus = require('gulp-stylus'),
  env = gutil.env,
  minifyCSS;

gulp.task('stylus', function() {
  var stream;

  if (env.mode === 'prod') {
    minifyCSS = require('gulp-minify-css');
    stream = gulp.src(env.getRoute('style'))
      .pipe(stylus({ pretty: true }))
      .pipe(minifyCSS({keepBreaks:true}))
      .pipe(gulp.dest(env.buildDir + '/css'));
  } else {
    stream = gulp.src(env.getRoute('style'))
      .pipe(stylus({ pretty: true }))
      .pipe(gulp.dest(env.buildDir + '/css'));
  }

  return stream;
});
