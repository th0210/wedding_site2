const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssSorter = require('css-declaration-sorter');
const mmq = require('gulp-merge-media-queries');
const browserSync = require('browser-sync');

function compilePug() {
    return gulp.src('./src/**/*.pug', '!./src/**/_*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./public'))
}

function compileSass() {
    return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssSorter()]))
    .pipe(mmq())
    .pipe(gulp.dest('./public/assets/css/'))
}

function browserInit() {
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    });
}

function browserReload(done) {
    browserSync.reload();
    done();
}

function watch() {
    gulp.watch("./src/**/*.pug", gulp.series(compilePug, browserReload));
    gulp.watch("./src/assets/sass/**/*.scss", gulp.series(compileSass, browserReload));
  }

exports.build = gulp.parallel(compileSass, compilePug);
exports.dev = gulp.parallel(browserInit, watch);