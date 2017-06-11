import gulp from 'gulp'
import pug from 'gulp-pug'
import stylus from 'gulp-stylus'
import webserver from 'gulp-webserver'
import del from 'del'

gulp.task('buildHTML', () =>
  gulp.src('src/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('lib'))
)

gulp.task('buildCSS', () =>
  gulp.src('src/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('lib'))
)
gulp.task('webserver', () =>
  gulp.src('lib')
    .pipe(webserver({
      livereload: true,
      open: true,
    }))
  )

gulp.task('main', ['buildHTML', 'buildCSS'])

gulp.task('watch', () =>
  gulp.watch('src/*', ['main'])
)

gulp.task('default', ['main', 'watch', 'webserver'])
