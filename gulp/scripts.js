var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream;


module.exports = function(options) {

  gulp.task('js', function () {
    var target = gulp.src('index.html');

     return gulp.src('js/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
	  	.pipe(concat('main.js'))
	  	.pipe(gulp.dest(options.tmp + "/js/"));
  });

  gulp.task('js:build', function () {
     return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
  });
}