const { src, dest, parallel, series, watch } = require('gulp');
const less = require('gulp-less');
const del = require('del');

function css() {
    return src('_less/*.less')
        .pipe(less())
        .pipe(dest('dist/css'));
}

function copyAssets() {
    return src(['./*.html', 'manifest.json'])
        .pipe(dest('dist'));
}

function js() {
    return src(['./js/*.js'])
        .pipe(dest('dist/js'));
}

function clean() {
    return del('dist');
}

function watchTask() {
    watch('./_less/*.less', css);
    watch(['./*.html', 'manifest.json'], copyAssets);
    watch('./js/*.js', js);
}

const defaults = series(clean, parallel(css, js, copyAssets));

exports.css = css;
exports.watch = series(defaults, watchTask);
exports.default = defaults;
