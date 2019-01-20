var gulp = require('gulp')
var server = require('gulp-webserver')
var sass = require('gulp-sass')
gulp.task('scss', function() {
    return gulp.src('./src/scss/*scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*scss', gulp.series('scss'))
})
gulp.task('ser', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9988,
            open: true,
            liveReload: true,
            proxies: [
                { source: '/users/api/list', target: "http://localhost:3000/users/api/list" }
            ]
        }))
})
gulp.task('default', gulp.series('scss', 'ser', 'watch'))