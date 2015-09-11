var gulp = require('gulp');

// Load plugins
var $ = require('gulp-load-plugins')();

module.exports = function(options) {
	// Images
	gulp.task('images', function () {
	    return gulp.src(['images/**/*'])
	        .pipe(gulp.dest(options.tmp + '/images'))
	        .pipe($.size());
	});

	gulp.task('images:build', function () {
	    return gulp.src(['images/**/*'])
	        .pipe(gulp.dest(options.dist + '/images'))
	        .pipe($.size());
	});
}