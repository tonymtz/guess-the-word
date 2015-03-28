var gulp = require('gulp');
var server = require('gulp-server-livereload');
var gutil = require('gulp-util'),
  env = gutil.env;

gulp.task('webserver', function() {
  gulp.src(env.buildDir)
    .pipe(server({
      directoryListing: false,
      open: true
    }));
});