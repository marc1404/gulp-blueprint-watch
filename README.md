# gulp-blueprint-watch
[![npm](https://img.shields.io/npm/v/gulp-blueprint-watch.svg?style=flat-square)](https://www.npmjs.com/package/gulp-blueprint-watch)
[![Travis](https://img.shields.io/travis/marc1404/gulp-blueprint-watch.svg?style=flat-square)](https://travis-ci.org/marc1404/gulp-blueprint-watch)
[![Code Climate](https://img.shields.io/codeclimate/github/marc1404/gulp-blueprint-watch.svg?style=flat-square)](https://codeclimate.com/github/marc1404/gulp-blueprint-watch)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/marc1404/gulp-blueprint-watch.svg?style=flat-square)](https://codeclimate.com/github/marc1404/gulp-blueprint-watch/coverage)
[![npm](https://img.shields.io/npm/l/gulp-blueprint-watch.svg?style=flat-square)](https://github.com/marc1404/gulp-blueprint-watch/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/gulp-blueprint-watch.svg?style=flat-square)](https://www.npmjs.com/package/gulp-blueprint-watch)

[![David](https://img.shields.io/david/marc1404/gulp-blueprint-watch.svg?style=flat-square)](https://github.com/marc1404/gulp-blueprint-watch/blob/master/package.json)
[![David](https://img.shields.io/david/dev/marc1404/gulp-blueprint-watch.svg?style=flat-square)](https://github.com/marc1404/gulp-blueprint-watch/blob/master/package.json)

## Installation
```
$ npm install --save-dev gulp-blueprint-watch
```
  
## Description
This package can be used to setup a [Gulp](https://www.npmjs.com/package/gulp) task to watch a set of files to rerun tasks on changes.

Using:
- [gulp-batch](https://www.npmjs.com/package/gulp-batch)

## Usage
*gulpfile.js*
```javascript
var watch = require('gulp-blueprint-watch');

watch(); // gulp task registered with default options
```
  
## Options
You can pass an options object.
- ```gulp``` (*object*, default: ```require('gulp')```): Provide a custom gulp instance
- ```task``` (*string*, default: ```'sass'```): The gulp task name
- ```dependencies``` (*string|array*, default: ```'default'```): The gulp task dependencies
- ```watch``` (*string|array*, default: ```[]```): Files to watch, passed to ```gulp.watch()```
- ```batch``` (*object*, default: ```{}```): Options passed to [gulp-batch](https://www.npmjs.com/package/gulp-batch)
- ```log``` (*boolean*, default: ```true```): Whether to log changed files
- ```start``` (*string|array*, default: ```'default'```): Task(s) to start on changes, passed to ```gulp.start()```

## Test
```
$ npm install -g mocha  
$ mocha
```

## Author
[marc1404](https://github.com/marc1404)

## License
[MIT](https://github.com/marc1404/gulp-blueprint-watch/blob/master/LICENSE)