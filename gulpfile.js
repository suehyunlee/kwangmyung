var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('check', function() {
  return gulp.src(['*.html', 'src/sass/*', 'src/js/*'])
  .pipe(livereload());
})

// SCSS : SCSS Config 
gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'));
});
 
// SCSS : SCSS Config(환경설정)
var sassOptions = { 
  outputStyle : "expanded",
  indentType : "tab",
  indentWidth : 1,
  precision: 6,
  sourceComments: false
};


// CSS 용량 축소
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});


// JS 용량 축소
gulp.task('uglify', function () {
    return gulp.src('src/js/*.js') 
      .pipe(concat('script.js'))
      .pipe(uglify()) 
      .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/css/*.css', ['minify-css']);
  gulp.watch('src/js/*.js', ['uglify']);
  gulp.watch('*.html',['check']);
  gulp.watch('src/sass/*',['check']);
  gulp.watch('src/js/*',['check']);
});

gulp.task('default', ['sass','watch','minify-css','uglify','check']);

