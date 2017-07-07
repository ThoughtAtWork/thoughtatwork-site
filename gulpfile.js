const gulp = require('gulp'),
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
runSequence = require('run-sequence'),
$ = require('gulp-load-plugins')(),
buffer = require('vinyl-buffer');


const sourcePaths = {
  styles: ['source/styles/*.scss'],
  html: ['source/*.html']
};

const distPaths = {
  styles: 'docs/styles'
};

const server = {
  host: 'localhost',
  port: '8001'
}

const localUrl = `http://localhost:${server.port}`;
const logSeperator = /*$.util.colors.grey*/(
    ' ----------------------------------------');

gulp.task('sass', () =>
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest( distPaths.styles )));

gulp.task('copyHTML', () => {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('docs'));
});

gulp.task('webserver', () =>
  gulp.src('docs')
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    })));

gulp.task('browserify', (cb) => {
    var b = browserify({
        entries: 'source/js/index.js'
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
        .pipe(notify({
            message: 'build complete.',
            onLast: true
        }))
        .on('end', () => cb())
        .pipe(gulp.dest('./docs/js'))
});

gulp.task('copy', () => {
  gulp.src('source/*.html')
    .pipe(gulp.dest('docs'));

  return gulp.src('source/assets/**/*.*')
    .pipe(gulp.dest('docs/assets'))
});

gulp.task('openbrowser', () =>
  opn( 'http://' + server.host + ':' + server.port ));

gulp.task('watch', ['webserver'], () => {
  gulp.watch(sourcePaths.styles, ['sass']);
  gulp.watch('source/*.html', ['copyHTML']);
});

gulp.task('build', (cb) =>
  runSequence(
    ['copy'],
    ['sass'],
    ['copyHTML'],
    ['browserify'],
    () => cb()
  ));

gulp.task('serve', ['build'], (cb) =>
  runSequence(
    ['watch'],
    // ['openbrowser'],
    () => {
        console.log();
        console.log(/*$.util.colors.bold*/('     Server Urls:'));
        console.log(logSeperator);
        console.log(`     Local: ${/*$.util.colors.magenta*/(localUrl)}`);
        console.log(logSeperator);
        return cb()}
  ));

gulp.task('default', ['build']);
