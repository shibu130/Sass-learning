const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'))


function buildSass(){
    return src('index.scss').pipe(sass()).pipe(dest('css'));
}

function watchScss(){
    watch(['index.scss'], buildSass());
}

exports.default = series(watchScss, buildSass);