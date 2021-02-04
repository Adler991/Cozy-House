var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync");
var concat = require("gulp-concat");
var csso = require("gulp-csso");

sass.compiler = require("node-sass");

module.exports = function () {
  gulp.task("sass", function () {
    return gulp
      .src("./src/static/scss/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(concat("main.css"))
      .pipe(csso())
      .pipe(sourcemaps.write("../map"))
      .pipe(gulp.dest("./build/css"))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      );
  });
};
