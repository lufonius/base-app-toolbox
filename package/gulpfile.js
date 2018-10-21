var gulp = require('gulp');
var shell = require('gulp-shell');
var copy = require('gulp-copy');
var rename = require('gulp-rename');
var bump = require('gulp-bump');


//lets work on this on a different time ... i hate gulp
gulp.task('buildUserManagement', function() {
    //much easier than using rollup function in gulp itself
    return gulp.src('./user-management')
        .pipe(shell([
            'cd user-management ; rollup --config'
        ]));
});

gulp.task('copy', function() {
    return gulp.src('./user-management/package.publish.json')
        .pipe(copy('./user-management/publish', { prefix: 1 }));
});

gulp.task('rename', function() {
    return gulp.src('./user-management/publish/package.publish.json')
        .pipe(rename({
            basename: 'package',
            extname: 'json'
        }));
});

gulp.task('build', function(done) {



    done();
});