var gulp = require('gulp'),
plumber = require('gulp-plumber'),
sass = require('gulp-sass'),
webserver = require('gulp-webserver'),
opn = require('opn'),
glob = require('glob'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
notify = require('gulp-notify'),
babel = require('gulp-babel'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer');


var sourcePaths = {
  styles: ['source/styles/*.scss']
};

var distPaths = {
  styles: 'build/styles'
};

var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('sass', function () {
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('cleanJS', function() {
    var testFiles = glob.sync('./source/js/*.js');
    console.log(testFiles)
    var b = browserify({
        entries: testFiles
        // entries: 'source/js/index.js'
    })

    // bundle all our file into one file
    // conerts it to a node.js stream
    b.bundle()
        // convert node.js stream to vinyl stream
        .pipe( source('app.js'))
        // convert from chunked stream to buffered stream
        .pipe( buffer())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
        .pipe(notify({
            message: 'build complete.',
            onLast: true
        }))
});
gulp.src("source/assets/**/**.*")
      .pipe(gulp.dest('build/assets'));

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('watch', function(){
  gulp.watch(sourcePaths.styles, ['sass']);
});

gulp.task('build', ['sass']);

gulp.task('default', ['build', 'webserver', 'watch', 'openbrowser', 'cleanJS']);
