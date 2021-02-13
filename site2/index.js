'use strict';

let gulp = require("gulp"),
    sass = require("gulp-sass");

let src = [
    "./src/",
    "./src/scss/",
    "./src/js/",
    "./src/images/"
];

let dist = [
    "./dist/",
    "./dist/css/",
    "./dist/js/",
    "./dist/images/"
];

sass.compiler = require("node-sass");

gulp.task("build", () => {
    return gulp.src()
});