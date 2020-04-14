import gulp, { watch } from 'gulp'
import pug from 'gulp-pug'
import stylus from 'gulp-stylus'
import webserver from 'gulp-webserver'
import del from 'del'

export const html = () =>
  gulp.src('src/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('lib'))

export const css = () =>
  gulp.src('src/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('lib'))

export const server = () =>
  gulp.src('lib')
    .pipe(webserver({
      livereload: true,
      open: true,
    }))

const main = () => {
  watch('src/*.styl', css) 
  watch('src/*.pug', html)
}

export default gulp.parallel(main, server)
