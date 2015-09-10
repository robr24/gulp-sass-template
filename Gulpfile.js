'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

var options = {
  src: './',
  dist: 'build',
  tmp: '.tmp'
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function() {
  gulp.start('serve');
});
