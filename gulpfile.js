let gulp = require('gulp')
let sass = require('gulp-sass')
let rename = require('gulp-rename')

gulp.task('styles',function(){
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public/'))
})

gulp.task('default',['styles'])