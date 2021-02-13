'use strict';

let gulp = require("gulp"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug");

sass.compiler = require("node-sass");

gulp.task("pug", () => {
    return gulp.src(["./src/pug/*.pug", "!./src/pug/_*.pug"])
        .pipe(pug())
        .pipe(gulp.dest("./dist"))
});

gulp.task("scss", () => {
    return gulp.src(["./src/scss/*.scss", "!./src/scss/_*.scss"])
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest("./dist/css"))
});

gulp.task("include", () => {
    return gulp.src("./src/include/**")
        .pipe(gulp.dest("./dist/include"))
});

