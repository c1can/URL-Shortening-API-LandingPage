const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const terser = require('gulp-terser');

function compilecss() {
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
}

function minify() {
    return src('src/scss/app.scss')
        const paths = [
            autoprefixer(),
            cssnano()
        ]
        .pipe(sass())
        .pipe(postcss(paths))
        .pipe(dest('dist/css'))
}

function js() {
    return src('src/js/*.js')
    .pipe(terser())
    .pipe(dest('dist/js'))
}

function watchArchives() {
    watch('src/scss/**/*.scss', compilecss);
    watch('src/js/*.js', js);
}

exports.default = watchArchives