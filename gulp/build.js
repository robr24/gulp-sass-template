var gulp = require('gulp');

module.exports = function(options) {
	gulp.task('build', ['clean:build', 'images:build', 'sass:build', 'js:build', 'bower:build'], function() {
		gulp.start('index:build');
	});

	// bower
	gulp.task('bower:build', function () {
	    return gulp.src(['bower_components/**/*'])
	        .pipe(gulp.dest(options.dist + '/bower_components/'));
	});
};