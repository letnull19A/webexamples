'use strict';

const { src, dest, watch, task, parallel, series } = require('gulp'),
                                              sass = require('gulp-sass'),
                                        browserSync = require('browser-sync'),
                                                pug = require('gulp-pug'),
                                        typescript = require('gulp-typescript');

browserSync.create();
sass.compiler = require('node-sass');
 

task('serve', () => {
  
  browserSync.init({
    host: "my-factory.org",
    open: "external",
    port: 3000,
    server: {
      baseDir: "./dist"
    },
    startPath: "index.html"
  });

  AutoCompile();
  
});

/*
 *  DEFAULT functions
 */

function AutoCompile()
{
  watch([SRC0[2], "./src/scss/_*.scss"], parallel('scss'));
  watch([SRC0[0], './src/pug/includes/_*.pug'], parallel('pug'));
  watch([SRC0[6]], series('ts'));
  watch([DEST[2], DEST[0], DEST[1]]).on("change", browserSync.reload);
}

/*
 *  DEFAULT tasks
 */

task('project::init', () => {
  return src('./.temp/*').pipe(dest('./src'));
});

task('project::clear', () => {
  return del(['./src', './dist']);
});

task('scss', () => {
  return src([SRC0[2], SRC0[3]])
    .pipe(sass())
    .pipe(dest('./dist/css'));
});

task('pug', () => {
  return src([SRC0[0], SRC0[1]])
    .pipe(pug())
    .pipe(dest(DEST[0]));
});

task('ts', () => {
  return src(SRC0[6])
    .pipe(typescript('tsconfig.json'))
    .pipe(dest(DEST[2]));
});

/*
 *  WATCH namespace 
 */

task('scss::watch', () => {
  watch([SRC0[2], SRC0[3]], parallel('scss'));
});

task('pug::watch', () => {
  watch([SRC0[0], SRC0[1]], parallel('pug'));
});

task('ts::watch', () => {
  watch([SRC0[6]], parallel('ts'));
});

const SRCD = "./src/";
const DSTD = "./dist/";

const SRC0 = [
  SRCD + "pug/*.pug",            // 0 PUG
  SRCD + "!pug/includes/_*.pug", // 1 !PUG
  SRCD + "scss/*.scss",          // 2 SCSS
  SRCD + "!scss/_*.scss",        // 3 !SCSS
  SRCD + "sass/*.sass",          // 4 SASS
  SRCD + "!sass/_*.sass",        // 5 !SASS
  SRCD + "typescript/*.ts"       // 6 TYPESCRIPT
];
const DEST = [
  DSTD + "",                     // 0 HTML
  DSTD + "css",                  // 1 CSS
  DSTD + "js",                   // 2 JS
  DSTD + "images",               // 3 IMAGES
  DSTD + "include"               // 4 INCLUDE
];

const SPEC = [
  "./.temp/",                    // 0 .TEMP
  "tsconfig.json"                // 1 TSCONFIG
];