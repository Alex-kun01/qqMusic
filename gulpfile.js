var gulp = require('gulp');
var gulpLess = require('gulp-less');

//保存文件路径，如有变化可调整
var folify = {
    src:"src/",
    dist:"dist/"
}


//创建任务
gulp.task("html",function(){
    //获取文件路径
    gulp.src("src/html/*")
        .pipe(gulp.dest("dist/html/"))//指定输出文件夹
})
//CSS
gulp.task("css",function(){
    //获取文件路径
    gulp.src("src/css/*")
        .pipe(gulpLess())
        .pipe(gulp.dest("dist/css/"))//指定输出文件夹
})

//创建任务
gulp.task("js",function(){
    //获取文件路径
    gulp.src("src/js/*")
        .pipe(gulp.dest("dist/js/"))//指定输出文件夹
})


gulp.task("default",["html","css","js"])//初始化任务