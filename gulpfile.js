//http://anthonysierra.com/11012015b

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    lint = require('gulp-eslint');

gulp.task('default', function () {//Use Babel 6.0.0 to transpile application code.
    return gulp.src("./src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(lint())
        .pipe(lint.format())
        //.pipe(lint.failOnError())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

gulp.task('buildTests', ['default'], function () {//Use Babel 6.0.0 to transpile test code.
    return gulp.src("./test/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(gulp.dest("built-tests"));
});

gulp.task('test', ['buildTests'], function () {
    var mocha = require('gulp-mocha');
    gulp.src("./built-tests/EquationGeneratorSpec.js", {read:false})
        .pipe(mocha({reporter:'nyan'}));
});