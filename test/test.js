process.chdir(__dirname);
require('should');

var gulp = require('gulp');
var watch = require('../lib/gulp-blueprint-watch');
var sinon = require('sinon');
var build = sinon.spy();

gulp.task('build', build);
watch({
  dependencies: ['build'],
  start: 'build'
});

describe('when running the watch task', function(){

  it('should complete without an error', function(){
    gulp.start('watch');
  });

  it('should have called build() exactly once', function(){
    build.calledOnce.should.be.exactly(true);
  });

});