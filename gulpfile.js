const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compilationSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles/'))
}

function minificationJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function minificationImages() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial:false }, gulp.series(compilationSass))
    gulp.watch('./source/scripts/*.js', { ignoreInitial:false }, gulp.series(minificationJavaScript))
    gulp.watch('./source/images/*', { ignoreInitial:false }, gulp.series(minificationImages))
}

