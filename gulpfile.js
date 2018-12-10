/// /////
// Required

const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    minifyCss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    twig = require('gulp-twig'),
    del = require('del');
    reload = browserSync.reload;

//Compile Twig templates to HTML
gulp.task('templates', function() {
    return gulp.src('src/**/*.html') 
        .pipe(twig())
        .pipe(gulp.dest('dist')); 
});

//Scripts Task
gulp.task('js', function(){
    gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js')) 
});


//HTML Task
gulp.task('html', function(){
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist')) 
});


//Sass Task
gulp.task('sass', function(){
    gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
});

//Style Task
gulp.task('styles', function(){
    gulp.src('src/css/*.css')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

// Image Task
gulp.task('images', function(){
    gulp.src('src/image/*')
    .pipe(gulp.dest('dist/image'))
});

//Watch Task
gulp.task('watch', function(){
    gulp.watch('./src/**/*.scss', ['sass']); 
    gulp.watch('./src/**/*.html', ['html']); 
    // Other watchers
  });

//Useref Task
gulp.task('useref', function(){
    return gulp.src('src/*.html')
      .pipe(useref())
      .pipe(gulp.dest('dist'))
  });

//BrowserSync Task
// gulp.task('browser-sync', function(){
//     browserSync({
//         server:{
//             baseDir: "./src/"
//         }
//     });
// })

//Default Task
gulp.task('default', ['useref', 'watch' ,'sass', 'html','images','templates','styles','js']);

//Build Task
gulp.task('build', function(){
    return del.sync('dist');
});
