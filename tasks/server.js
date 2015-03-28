var gulp = require('gulp'),
  gServer = require('gulp-server-livereload'),
  gutil = require('gulp-util'),
  env = gutil.env;

gulp.task('webserver', [], function() {
  gulp.src(env.buildDir)
    .pipe(gServer({
      directoryListing: false,
      open: true
    }));
});