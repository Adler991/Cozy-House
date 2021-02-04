var gulp = require("gulp");
var path = require("./gulp/path/path.js");
var browserSync = require("browser-sync").create();

path.forEach(function (taskPath) {
  require(taskPath)();
});

gulp.task(
  "default",
  gulp.series(
    gulp.parallel("nunjucks", "sass", "script"),
    gulp.parallel("watch", "browser-sync")
  )
);

gulp.task("clean", gulp.series(gulp.parallel("clean")));
