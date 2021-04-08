'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    typescript = require('gulp-typescript');

browserSync.create();
sass.compiler = require('node-sass');
 

gulp.task('serve', () => {
  
  browserSync.init({
    host: "my-factory.org",
    open: "external",
    port: 3000,
    server: {
      baseDir: "./dist"
    },
    startPath: "index.html"
  });

  gulp.watch(['./src/scss/*.scss', "./src/scss/_*.scss"], gulp.parallel('scss'));
  gulp.watch(['./src/pug/*.pug', './src/pug/includes/_*.pug'], gulp.parallel('pug'));
  gulp.watch('./src/typescript/*.ts', gulp.series('ts'));
  gulp.watch(["./dist/**/*.js", "./dist/**/*.html", "./dist/**/*.css"]).on("change", browserSync.reload);
});

gulp.task('scss', () => {
  return gulp.src(['./src/scss/*.scss', '!./src/scss/_*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('scss:watch', () => {
  gulp.watch(['./src/scss/*.scss', "!./src/scss/_*.scss"], gulp.parallel('scss'));
});

gulp.task('pug', () => {
  return gulp.src(['./src/pug/*.pug', '!./src/pug/includes/_*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('./dist'));
});

gulp.task('ts', () => {
  return gulp.src('./src/typescript/*.ts')
    .pipe(typescript('tsconfig.json'))
    .pipe(gulp.dest('./dist/js'));
});