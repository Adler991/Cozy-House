var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var beautify = require('gulp-html-beautify');
var browserSync = require('browser-sync');


module.exports = function () {
  gulp.task('nunjucks', function () {
    return gulp.src(['src/nunjucks/pages/*.html', 'src/nunjucks/sections/*.html'])
      .pipe(nunjucksRender({
        path: ['src/nunjucks/pages/*.html', 'src/nunjucks/sections/*.html' ]// String or Array
      }))
      .pipe(beautify({
        indent_size: 2 // размер отступа - 2 пробела
      }))
      .pipe(gulp.dest('build'))
      .on('end', browserSync.reload);
  });
};