var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('sass', function(){
 return gulp.src('scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('sass', function(){
     return gulp.src('scss/base2.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});




gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['templates']
    }))
  // output files in app folder
  .pipe(gulp.dest(''))
});

gulp.task('watch', ['browserSync', 'sass', 'nunjucks'], function (){
  gulp.watch('scss/**/*.scss', ['sass']); 
    gulp.watch('templates/**/*.html', ['nunjucks']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload); 
});

gulp.task('browserSync', function(){
   browserSync.init({
     server:{
         baseDir: ''
     },

   })
})





