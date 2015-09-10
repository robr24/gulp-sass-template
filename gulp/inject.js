var gulp = require('gulp');

module.exports = function(options) {

	gulp.task('inject', ['sass', 'js'], function() {
		gulp.start('index');
	});

	gulp.task('index', function() {
		var target = gulp.src('index.html');
		var sources = gulp.src([options.tmp + '/js/**/*.js', options.tmp + '/css/**/*.css']);

		return target.pipe(inject(sources, {
			addRootSlash: true,
			ignorePath: '.tmp'
		}))
			.pipe(wiredep())
	  		.pipe(gulp.dest('.tmp/'));
  	});
};