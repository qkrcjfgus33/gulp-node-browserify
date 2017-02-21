# Usage


## Install

```
npm install --save-dev gulp-node-browserify
```

## Example

```javascript
var gulp = require('gulp');
var browserify = require('gulp-node-browserify');

// Basic usage
gulp.task('browserify', () => {
  let dest = './dest'

  gulp.src('./index.js')
    .pipe(browserify())
    .pipe(gulp.dest(dest))
});
```

### Options

Reference : https://github.com/substack/node-browserify#methods

#### files, opts.entries is not used.
