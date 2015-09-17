var batch = require('gulp-batch');

module.exports = init;

function init(options){
  options = defaultOptions(options);

  registerTask(options);
}

function defaultOptions(options){
  options = options || {};
  options.gulp = options.gulp || require('gulp');

  return options;
}

function registerTask(options){
  var gulp = options.gulp;

  gulp.task(options.task, options.dependencies, function(){
    gulp.watch(options.watch, batch(function(events, done){
      events
        .on('data', function(data){
          if(options.log){
            console.log(data);
          }
        })
        .on('end', function(){
          gulp.start(options.start, done);
        });
    }));
  });
}