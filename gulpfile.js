/*
 * HuddyMe - Gulpfile.js
 */

/* Dependencies */
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  colors = require('colors'),

/* Environment vars */
  env = gutil.env,
  argv = require('minimist')(process.argv);

switch(true) {
  case argv.prod:
  case argv.production:
  case argv.p:
    env.mode = 'prod';
    break;
  case argv.test:
  case argv.tests:
  case argv.testing:
  case argv.t:
    env.mode = 'test';
    break;
  case argv.stage:
  case argv.staging:
  case argv.stg:
  case argv.s:
    env.mode = 'stage';
    break;
  default:
    env.mode = 'dev';
}

env.buildDir = 'build';
env.bundles = require('./apps/bundles.json');

env.productionEnable = argv.prod || argv.production || false;

env.getRoute = function(pack, customPrefix) {
  var path,
    prefix;
  if (!env.bundles[pack]) {
    throw pack + ' pack is undefined, please update your bundles.json'.red;
  }
  if (typeof env.bundles[pack] === 'string') {
    prefix = customPrefix || 'apps/';
    path = prefix + env.bundles[pack];
  } else {
    path = Array.prototype.map.call(env.bundles[pack], function(entry) {
      prefix = customPrefix || 'apps/';
      return entry[0] === '!' ? '!' + prefix + entry.slice(1) : prefix + entry;
    });
  }
  return path;
};

/* Import all tasks from directory */
require('fs').readdirSync('./tasks').forEach(function(file) {
  if (/.js$/.test(file)) {
    require('./tasks/' + file);
  }
});

/* default task */
gulp.task('all', ['assets', 'jshint', 'install', 'scripts', 'stylus', 'inject']);
gulp.task('serve', ['watch', 'deploy', 'webserver']);
gulp.task('test', ['karma']);
gulp.task('default', ['serve']);
