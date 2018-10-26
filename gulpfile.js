var gulp = require('gulp');
var clean = require('gulp-clean');

var globs = {
  dist: './dist',  
  src: './src',
};

var browserSync = require('browser-sync').create();

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: globs.dist
        }
    });
    gulp.watch("*src/**/*", ['src-watch']); 
});

gulp.task('src', function () {
  return gulp
  .src(globs.src)
  .pipe(gulp.dest(globs.dist + '/src'));  
});

gulp.task('src-watch', ['clean','src'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('clean', function() {
  return gulp.src([globs.dist], {read: false})
    .pipe(clean());
});

gulp.task('copy-src', ['clean'], function () {
      gulp.src([
        'index.html',
        '*src/**/*',
    ])
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', [ 'copy-src','serve']);
gulp.task('default', ['build']);