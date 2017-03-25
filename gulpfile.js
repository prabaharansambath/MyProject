var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var css = require('gulp-css');
var rubysass = require('gulp-ruby-sass');

gulp.task('sass',function(){
	return gulp.src('app/sass/main.scss')
	.pipe(sass({
		style: 'compressed'
	}))
	.pipe(gulp.dest('app/css/'));
});

gulp.task('minifyjs',function(){
   gulp.src(['bower_components/jquery/dist/jquery.js',
   	         'bower_components/lightslider/src/js/lightslider.js',
   	         'bower_components/aos/dist/aos.js'
   	])
   .pipe(concat('libs.js'))
   .pipe(uglify())
   .pipe(gulp.dest('app/js/'));
});

gulp.task('minifycss',function(){

	gulp.src(['app/css/main.css',
		'bower_components/aos/dist/aos.css']
		)
    .pipe(concat('style.css'))
    .pipe(css())
    .pipe(gulp.dest('app/css/'));
}

	);

gulp.task('watch',function(){
	gulp.watch('app/sass/main.scss',['sass']);
	
});
gulp.task('default', ['sass']);