var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

module.exports = function(options) {
  
  // Compile sass into CSS & auto-inject into browsers
  gulp.task('sass', function() {
      return gulp.src("sass/**/*.scss")
          .pipe(sass().on('error', sass.logError))
       	  .pipe(concat('main.css'))
          .pipe(gulp.dest(options.tmp + "/css/"));
  });

  gulp.task('sass:build', function() {
    return gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('main.css'))
      .pipe(gulp.dest(options.dist + '/css/'));
  });

}