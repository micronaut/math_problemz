//http://anthonysierra.com/11012015b
//https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/
//https://www.smashingmagazine.com/2016/02/writing-next-generation-reusable-javascript-modules/
require('babel-core/register');
require('babel-regenerator-runtime/runtime');

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    lint = require('gulp-eslint');

gulp.task('default', ['test'], () => {
    return gulp.src('./src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failOnError())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
//
//gulp.task('buildTests', ['default'], () => {
//    return gulp.src("./test/*.js")
//        .pipe(sourcemaps.init())
//        .pipe(babel())
//        .pipe(gulp.dest("built-tests"));
//});

gulp.task('test', () => {
    var mocha = require('gulp-mocha');
    gulp.src('./test/*Spec.js', {read:false})
        .pipe(mocha({reporter:'nyan'}))
        //.pipe(mocha({reporter:'spec'}))
        .on('error', handleError);
});


function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}