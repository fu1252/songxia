var gulp=require('gulp');
var plugins=require('gulp-load-plugins')();

gulp.task('default', function () {
    return gulp.src('js/common.js') 
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('stylish'))
});