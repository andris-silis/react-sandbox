
import gulp from 'gulp';
import gutil from 'gulp-util';
import livereload from 'gulp-livereload';
import filter from 'gulp-filter';
import react from 'gulp-react';
import webpack from 'gulp-webpack';
import webpackConfig from './webpack-config';

import sourcemaps from 'gulp-sourcemaps';


var outputDestination = './www/compiled';
var jsOutputDestination = `${outputDestination}/js`;
var cssOutputDestination = `${outputDestination}/css`;

var cssFile = 'main.css';


gulp.task('build-js', () => {
  gulp
    .src('src/js/app.jsx')
    .pipe(webpack(webpackConfig()))
    .on('error', gutil.log)
    .pipe(gulp.dest(jsOutputDestination));
});


gulp.task(
  'build',
  [
    'build-js'
  ],
  () => {
    if (process.env.NODE_ENV === 'production' && !process.env.NO_MINIFY) {
      gulp.start('minify-public', function () {
        return gutil.log('Build done');
      });
    } else {
      return gutil.log('Build done');
    }
  }
);


gulp.task('build-prod', () => {
  process.env.NODE_ENV = 'production';
  gulp.start('build');
});


gulp.task('watch', () => {
  livereload.listen();

  var webpackConfigObj = webpackConfig();
  webpackConfigObj.watch = true;
  gulp
    .src('src/js/app.jsx')
    .pipe(webpack(webpackConfigObj))
    .on('error', gutil.log)
    .pipe(gulp.dest(jsOutputDestination));

  gulp
    .watch(`${outputDestination}/**`)
    .on('change', livereload.changed);

});




gulp.task('default', () => {});
