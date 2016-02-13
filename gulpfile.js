//http://anthonysierra.com/11012015b
//https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/
require('babel-core/register');

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    lint = require('gulp-eslint');

gulp.task('default', () => {
    return gulp.src("./src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failOnError())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

gulp.task('buildTests', ['default'], () => {
    return gulp.src("./test/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(gulp.dest("built-tests"));
});

gulp.task('test', ['buildTests'], () => {
    var mocha = require('gulp-mocha');
    gulp.src("./built-tests/*Spec.js", {read:false})
        .pipe(mocha({reporter:'nyan'}))
        //.pipe(mocha({reporter:'spec'}))
        .on("error", handleError);
});


function handleError(err) {
    //console.log(err.toString());
    this.emit('end');
}