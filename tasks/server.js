var gulp = require('gulp'),
  gServer = require('gulp-server-livereload'),
  gutil = require('gulp-util'),
  env = gutil.env;

gulp.task('webserver', ['deploy'], function() {
  gulp.src(env.buildDir)
    .pipe(gServer({
      defaultFile: 'index.html',
      directoryListing: false,
      open: true
    }));
});