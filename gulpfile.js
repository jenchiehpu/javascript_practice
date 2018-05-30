var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    console.log(12);
    return gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    //監看所有檔案
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});
gulp.task('default', ['serve', 'watch']);

gulp.task('csl', function () {
    console.log(1);
    console.log(2);
    console.log(3);
})
gulp.task('cs', function () {
    console.log(4);
    console.log(5);
    console.log(6);
})
gulp.task('c', function () {
    console.log(7);
    console.log(8);
    console.log(9);
})
gulp.task('ccc', ['csl', 'cs', 'c']);


