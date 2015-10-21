var path = require('path');
var batch = require('gulp-batch');
var browserSync = require('browser-sync').create();

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
    options.proxy = options.proxy || 'localhost:8000';

    return options;
}

function registerTask(options){
    var gulp = options.gulp;

    gulp.task(options.task, options.dependencies, function(){
        browserSync.init({
            proxy: options.proxy,
            open: false
        });

        gulp.watch(options.watch, batch(options.batch, function(events, done){
            events
                .on('data', function(data){
                    if(options.log){
                        console.log(data.type, path.basename(data.path));
                    }
                })
                .on('end', function(){
                    gulp.start(options.start, function(){
                        browserSync.reload(events);
                        done();
                    });
                });
        }));
    });
}