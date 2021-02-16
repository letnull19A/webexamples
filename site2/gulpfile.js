'use strict';

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    imagemin = require("gulp-imagemin"),
    uglify = require("gulp-uglify");

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

gulp.task("imagemin", () => {
    return gulp.src("./src/images/**")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.mozjpeg({quality: 75, progressive: true})
        ]))
        .pipe(gulp.dest("./dist/images"))
});

gulp.task("uglify", () => {
    return gulp.src("./src/js/**")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
});

gulp.task("start", gulp.parallel(['include']))
gulp.task("build", gulp.parallel(['pug', 'scss', 'imagemin', 'uglify']))

