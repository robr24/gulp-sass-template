var gulp = require('gulp'),
    sass = require('gulp-sass');
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream;

module.exports = function(options) {

  gulp.task('wiredep:build', function() {
    gulp.src('index.html')
      .pipe(wiredep())
      .pipe(gulp.dest('build/'));
  });



  gulp.task('build', ['wiredep:build', 'js:build']);


}




