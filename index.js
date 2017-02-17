const browserify = require('browserify');
const source = require('vinyl-source-stream');
const through = require('through2');
const path = require('path');

module.exports = (config) => {
  return through.obj(function(file, encoding, cb) {
    browserify(file.path, config).bundle()
      .pipe(source(path.basename(file.path)))
      .pipe(through.obj((browserFile, encoding, callback) => {
        cb(null, browserFile);
        callback(null, browserFile);
      }))
  })
}
