var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('JSHint', function(){
  return gulp.src('index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
})