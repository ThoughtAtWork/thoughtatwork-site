const gulp = require('gulp'),
plumber = require('gulp-plumber'),
sass = require('gulp-sass'),
webserver = require('gulp-webserver'),
opn = require('opn'),
glob = require('glob'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
babel = require('gulp-babel'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
runSequence = require('run-sequence'),
$ = require('gulp-load-plugins')(),
autoprefixer = require('gulp-autoprefixer'),
buffer = require('vinyl-buffer'),
nunjucksRender = require('gulp-nunjucks-render'),
data = require('gulp-data');


const sourcePaths = {
  styles: ['source/styles/**/*.scss'],
  html: ['source/*.html']
};

const distPaths = {
  styles: 'build/styles'
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
    .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie 8'],
            cascade: false
    }))
    .pipe(gulp.dest( distPaths.styles )));

// gulp.task('nunjucks', () => {
//   return gulp.src('source/*.html')
//     .pipe(gulp.dest('build'));
// });

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('source/pages/*.+(html|njk|nunjucks)')
  // Adding data to Nunjucks
  .pipe(data(function() {
    return require('./source/assets/json/data.json')
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['source/pages/components/']
    }))
  // output files in app folder
  .pipe(gulp.dest('build'))
});

gulp.task('webserver', () =>
  gulp.src('build')
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
        .on('end', () => cb())
        .pipe(gulp.dest('./build/js'))
});

gulp.task('copy', () => {
  gulp.src('source/*.html')
    .pipe(gulp.dest('build'));

  // for register page stuff from rit
  gulp.src('source/register-files/*')
    .pipe(gulp.dest('build'));

  return gulp.src('source/assets/**/*.*')
    .pipe(gulp.dest('build/assets'))
});

gulp.task('openbrowser', () =>
  opn( 'http://' + server.host + ':' + server.port ));

gulp.task('watch', ['webserver'], () => {
  gulp.watch(sourcePaths.styles, ['sass']);
  gulp.watch('source/**/*.+(html|njk|nunjucks)', ['nunjucks']);
  gulp.watch('source/js/**.js', ['browserify']);
  gulp.watch('source/assets/**/*.*', ['copy', 'nunjucks']);
});

gulp.task('build', (cb) =>
  runSequence(
    ['copy'],
    ['sass'],
    ['nunjucks'],
    ['browserify'],
    () => cb()
  ));

gulp.task('serve', ['build'], (cb) =>
  runSequence(
    ['watch'],
    // ['openbrowser'],
    () => {
        console.log();
        console.log(('     Server Urls:'));
        console.log(logSeperator);
        console.log(`     Local: ${(localUrl)}`);
        console.log(logSeperator);
        return cb()}
  ));

gulp.task('default', ['build']);
