var gulp        = require('gulp');
var browserSync = require('browser-sync');

module.exports = function () {
  // Static server
  gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
        baseDir: "./build"
      }
    });
  });
};