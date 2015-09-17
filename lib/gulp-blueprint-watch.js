var path = require('path');
var batch = require('gulp-batch');

module.exports = init;

function init(options){
  options = defaultOptions(options);

  registerTask(options);
}

function defaultOptions(options){
  options = options || {};
  options.gulp = options.gulp || require('gulp');
  options.task = options.task || 'watch';
  options.dependencies = options.dependencies || ['default'];
  options.watch = options.watch || [];
  options.batch = options.batch || {};
  options.log = (typeof options.log !== 'undefined') ? options.log : true;
  options.start = options.start || 'default';

  return options;
}

function registerTask(options){
  var gulp = options.gulp;

  gulp.task(options.task, options.dependencies, function(){
    gulp.watch(options.watch, batch(options.batch, function(events, done){
      events
        .on('data', function(data){
          if(options.log){
            console.log(data.type, path.basename(data.path));
          }
        })
        .on('end', function(){
          gulp.start(options.start, done);
        });
    }));
  });
}