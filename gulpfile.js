const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('pipe-html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
  return gulp.src('src/styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles'));
});

gulp.task('minify-css', function () {
  return gulp.src('src/styles/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('minify-img', function () {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('babel', function () {
  return gulp.src('src/scripts/*.js')
    .pipe(babel({
        presets: ['env']
      }))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('uglify-js', function (cb) {
  pump([
        gulp.src('dist/scripts/*.js'),
        uglify(),
        gulp.dest('dist/scripts')
    ],
    cb
  );
});

gulp.task('watch', function () {
  gulp.watch('src/*.html', ['pipe-html']);
  gulp.watch('src/styles/scss/*.scss', ['sass']);
  gulp.watch('src/styles/main.css', ['minify-css']);
  gulp.watch('src/images/*', ['minify-img']);
  gulp.watch('src/scripts/*.js', ['babel']);
  gulp.watch('dist/scripts/*.js', ['uglify-js']);
});
