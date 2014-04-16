var gulp = require('gulp');
var exec = require('child_process').exec;
var sys = require('sys');


// Run all PHPUnit tests
gulp.task('phpunit', function()
{
        var phpunit = function()
        {
                exec('phpunit', function(error, stdout)
                {
                        sys.puts(stdout);
                });
        };
        
        phpunit();
        
        gulp.watch(['./app/tests/*.php', './app/Pangea/**/*.php'], function()
        {
                phpunit();
        });
});

// What tasks does running gulp trigger?
gulp.task('default', ['phpunit']);