/**
 * Created by koss on 1/3/17.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('concat', function() {
    return gulp.src(['js/minified/jquery.mousewheel.min.js', 'js/minified/jquery.mCustomScrollbar.min.js'])
        .pipe(concat('jquery.mCustomScrollbar.concat.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('jquery.mCustomScrollbar.js'),
            uglify(),
            rename({
                suffix: ".min"
            }),
            gulp.dest('js/minified')
        ],
        cb
    );
});

gulp.watch('jquery.mCustomScrollbar.js', ['compress']);
gulp.watch('js/minified/jquery.mousewheel.min.js', ['concat']);