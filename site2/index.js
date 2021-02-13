'use strict';

let gulp = require("gulp"),
    sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("pug", () => {
    return gulp.src("./src/**/*.pug", !"./src/**/_*.pug"])
});

gulp.task("scss", () => {
    return gulp.src("./src/**/*.scss")
        .pipe(sass().on("error", sass.logError)
        .pipe(gulp.dest("./dist/css")));
});

