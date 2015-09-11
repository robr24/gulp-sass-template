var gulp = require('gulp'),
 	inject = require('gulp-inject'),
    wiredep = require('wiredep').stream;

module.exports = function(options) {

	gulp.task('inject', ['sass', 'js'], function() {
		gulp.start('index');
	});

	gulp.task('index', function() {
		var target = gulp.src('*.html');
		var sources = gulp.src([options.tmp + '/js/**/*.js', options.tmp + '/css/**/*.css']);

		return target.pipe(inject(sources, {
			addRootSlash: true,
			ignorePath: '.tmp'
		}))
			.pipe(wiredep())
	  		.pipe(gulp.dest('.tmp/'));
  	});

  	gulp.task('index:build', function() {
  		var target = gulp.src('*.html');
		var sources = gulp.src([options.dist + '/js/**/*.js', options.dist + '/css/**/*.css']);

		return target.pipe(inject(sources, {
			addRootSlash: false,
			ignorePath: 'build'
		}))
			.pipe(wiredep())
	  		.pipe(gulp.dest('build/'));
  	});
};