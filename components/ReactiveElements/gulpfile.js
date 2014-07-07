var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

    gulp.src('example/jsx/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('example/dist'));
});