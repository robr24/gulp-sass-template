var gulp = require('gulp');

var bs = require("browser-sync").create('My Server');

module.exports = function(options) {


  // Static Server + watching scss/html files
  gulp.task('serve', ['images', 'inject', 'watch'], function() {
      bs.init({
          server: {
            baseDir: options.tmp + '/',
            routes: {
              '/bower_components': 'bower_components'
            }
          } 
      });
  });

  gulp.task('watch', function() {
    gulp.watch(['sass/**/*.scss', 'js/**/*.js', '*.html'], ['inject']);

    // and call any methods on it.
	  bs.watch(['.tmp/*.html']).on('change', bs.reload);
  });

}