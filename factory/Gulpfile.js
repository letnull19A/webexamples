'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src(['./src/scss/*.scss', '!./src/scss/_*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('./src/scss/*.scss', gulp.parallel('scss'));
});