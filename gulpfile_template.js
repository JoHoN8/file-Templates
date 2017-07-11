var gulp = require('gulp'),
  gutil = require('gulp-util'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  spsave = require('gulp-spsave'),
  creds = require("D:/siteSettings.js");;

// Copy files
gulp.task('copy', function() {
  return gulp.src('src/js/vendor/**/*.js')
    .pipe(gulp.dest('dist/js/vendor'))
    .pipe(notify({ message: 'Copy task complete' }));
});

// Styles
gulp.task('styles', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'Explorer 9', 'Firefox ESR', 'Opera 12.1'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename(function (dir, base, ext) {
      return base + ".min" + ext;
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(['src/js/*.js','!src/js/vendor/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename(function (dir, base, ext) {
      return base + ".min" + ext;
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['dist/css', 'dist/js'], { read: false })
    .pipe(clean());
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('copy', 'styles', 'scripts');
});

//spSave
gulp.task("spSave", function(){
  return gulp.src("./build/*.js")
	.pipe(spsave({
		siteUrl: "", //absolue url
		folder: "YourAppAssets/js"
	}, creds));
});

// Watch
// gulp.task('watch', function() {

//   // Watch .scss files
//   gulp.watch('src/scss/**/*.scss', ['styles']);

//   // Watch .js files
//   gulp.watch('src/js/**/*.js', ['scripts']);

// });

/*
other usefule extensions
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
jshint = require('gulp-jshint'),
*/