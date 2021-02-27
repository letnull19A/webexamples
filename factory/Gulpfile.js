'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
 

browserSync.create();
sass.compiler = require('node-sass');
 

gulp.task('serve', () => {
  
  browserSync.init({
    server: "./dist",
    online: true,
    tunnel: "test",
  });

  gulp.watch(['./src/scss/*.scss', "!./src/scss/_*.scss"], gulp.parallel('scss'));
  gulp.watch("./dist/**").on("change", browserSync.reload);
});

gulp.task('scss', () => {
  return gulp.src(['./src/scss/*.scss', '!./src/scss/_*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('scss:watch', () => {
  gulp.watch(['./src/scss/*.scss', "!./src/scss/_*.scss"], gulp.parallel('scss'));
});