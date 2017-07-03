let gulp = require('gulp')
let sass = require('gulp-sass')
let rename = require('gulp-rename')
let babel = require('babelify')
let browserify = require('browserify')
let source = require('vinyl-source-stream')

gulp.task('styles',function(){
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public/'))
})

gulp.task('assets',function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'))
})

gulp.task('scripts',function(){
	browserify('./src/index.js')
		.transform(babel)
		.bundle()
		.pipe(source('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('public'))
})

gulp.task('default',['styles','assets','scripts'])