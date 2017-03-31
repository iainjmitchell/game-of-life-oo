const gulp = require('gulp')
const mocha = require('gulp-mocha')
const standard = require('gulp-standard')

gulp.task('default', ['lint', 'test'])

gulp.task('test', ['lint'], () => {
  return gulp.src('tests/*.js', {read: false})
  .pipe(mocha())
})

gulp.task('lint', () => {
  return gulp.src(['tests/**/*.js', 'src/**/*.js', '*.js'])
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: true
  }))
})
