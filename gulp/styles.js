var gulp = require('gulp'),
    sass = require('gulp-sass');
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream;

module.exports = function(options) {
  
  // Compile sass into CSS & auto-inject into browsers
  gulp.task('sass', function() {
      return gulp.src("sass/**/*.scss")
          .pipe(sass().on('error', sass.logError))
       	  .pipe(concat('main.css'))
          .pipe(gulp.dest(options.tmp + "/css/"));
  });	

}