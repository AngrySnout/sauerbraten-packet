var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
	return gulp.src('./src/**/*')
		.pipe(babel({presets: ['es2015']}))
		.on('error', function(e) {
			console.log(e);
			this.emit('end');
		})
		.pipe(gulp.dest('./lib/'));
});
