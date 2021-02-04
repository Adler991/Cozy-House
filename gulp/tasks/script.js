var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var sourcemaps   = require('gulp-sourcemaps');
var minify = require('gulp-minify');

module.exports = function () {
	gulp.task('script', function () {
    return gulp.src([
      'src/static/js/*.js'
    ])
      .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(minify())
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest('build/js/'))
      .pipe(browserSync.reload ({
        stream: true
      }));
  });
};