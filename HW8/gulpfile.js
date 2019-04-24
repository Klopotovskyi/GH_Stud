var gulp = require ('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var rewriteCSS = require('gulp-rewrite-css');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false}))
        .pipe(gulp.dest('./src/css'))
});

gulp.task('my-rewrite', function() {
    var dest = './dist/';
    return gulp.src('./static/css/*.css')
        .pipe(rewriteCSS({destination:dest}))
        .pipe(gulp.dest(dest));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});
