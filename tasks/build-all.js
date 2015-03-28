/*
 * Huddy Me
 */
var fs = require('fs'),
  path = require('path'),
  gulp = require('gulp'),
  shell = require('gulp-shell'),
  colors = require('colors'),
  srcpath = './apps';

function getAllApps() {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

gulp.task('build-all', [], function() {
  var apps = getAllApps();

  /***** Don't touch this -__- *****/
  console.log('RELEASE THE HUDDY!!'.yellow);
  console.log('           ,-.\n _,.      /  /\n; \\____,-==-._  )\n//_    `----\' {+>'.green + '     If I could fly\n'.red +
  '`  `\'--/  /-\'`('.green + '           like an eagle in the sky!\n'.red + '     /  / \n     `=\''.green);
  console.log('NOW YOU ARE BUILDING ALL THE APPS!!!'.cyan);
  /*********************************/

  gulp.task('build-on-air', shell.task(apps.map(function(app) {
    return 'echo =============== [[[ BUILDING ' + app + ' ]]] =============== && gulp all --app=' + app;
  })));

  gulp.start('build-on-air', function() {
    console.log('          Done. Enjoy the apps!'.green);
  });
});
