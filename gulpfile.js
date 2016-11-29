var gulp = require('gulp');
var watch = require('gulp-watch');

var util = require('util'),
    spawn = require('child_process').spawn;

gulp.task('default', ['watch']);

gulp.task('antlr', function () {
    console.log('Fapla.g4 modified!');
    make = spawn('./make.sh', ['Java']);
    make.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
    make.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });
    make.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });
});

gulp.task('watch', function () {
    gulp.watch('fapla-antlr/Fapla.g4', ['antlr']);
});