var gulp = require('gulp'),
	sass = require('gulp-sass'),
	gutil = require('gulp-util'),
	uglifycss = require('gulp-uglifycss');

gulp.task('css', function() {
	gulp.src(['src/scss/main.scss'])
		.pipe(sass().on('error', gutil.log))
		.pipe(uglifycss())
		.on('error', gutil.log)
		.pipe(gulp.dest('css'));
	//.pipe(livereload());
});

gulp.task('watch', ['css'], function() {
	gulp.watch(['src/scss/**/*.scss'], ['css']);
});

gulp.task('default', ['watch']);

//livereload.listen();
