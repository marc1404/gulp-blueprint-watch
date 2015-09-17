process.chdir(__dirname);

var gulp = require('gulp');
var watch = require('../lib/gulp-blueprint-watch');

watch();

describe('when running the watch task', function(){

  it('should complete without an error', function(){
    gulp.start('watch');
  });

});