var gulp = require('gulp'),
    flatten = require('gulp-flatten'),
    angularFilesort = require('gulp-angular-filesort'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject'),
    imagemin = require('gulp-imagemin')
runSequence = require('run-sequence'),
    gzip = require('gulp-gzip');

var paths = {
    app: './app',
    cssPath: './assets/css',
    jsPath: './assets/js',
    imgPath: './assets/img'
};

//minify app's js to files
gulp.task('minAppJS', function () {
    return gulp.src([paths.app + "**/*.js", paths.app + "/**/**/*.js"])
        .pipe(angularFilesort())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate({
            remove: true,
            add: true,
            single_quotes: true
        }))        
        .pipe(uglify({ mangle: true }))
        .pipe(gzip())
        .pipe(rename(function (path) {
            if (path.extname === '.js') {
                path.basename += '.min';
            }
        }))
        .pipe(gulp.dest(paths.jsPath));
});

//plugins js minify
gulp.task('min3rdJS', function () {
    return gulp.src([paths.jsPath + '**/*.js', '!' + paths.jsPath + '**/custom.js', '!' + paths.jsPath + '**/*.min.js'])
        .pipe(angularFilesort())
        .pipe(concat('plugins.js'))        
        .pipe(uglify())
        //.pipe(gzip())
        .pipe(rename(function (path) {
            if (path.extname === '.js') {
                path.basename += '.min';
            }
        }))
        .pipe(flatten())
        .pipe(gulp.dest(paths.jsPath));
});
//minify css
gulp.task('minCSS', function () {
    return gulp.src(["!" + paths.cssPath + "**/*.min.css", paths.cssPath + "**/*.css"])
        .pipe(flatten())
        //.pipe(concat('plugins.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename(function (path) {
            if (path.extname === '.css') {
                path.basename += '.min';
            }
        }))
        .pipe(gulp.dest(paths.cssPath));
});

// //minify pvt css to prod 
// gulp.task('minAppCSS', function () {
//     return gulp.src([paths.cssPath + "**/style.css",paths.cssPath + "**/responsive.css", "!" + paths.cssPath + "**/*.min.css"])
//         .pipe(flatten())
//         //.pipe(concat('styles.css'))
//         .pipe(cleanCSS({ compatibility: 'ie8' }))
//         .pipe(rename(function (path) {
//             if (path.extname === '.css') {
//                 path.basename += '.min';
//             }
//         }))
//         .pipe(gulp.dest(paths.cssPath));
// });


gulp.task('injectToHtml', function () {

    var target = gulp.src('index.html');

    // var sourcesJs = gulp.src([paths.jsPath + "/plugins.min.js", paths.jsPath + "/app.min.js" ], { read: false });
    var sourcesJs = gulp.src([paths.jsPath + "/plugins.min.js", paths.jsPath + "/app.min.js", paths.jsPath + "/custom.min.js"], { read: false });

    var sourceCss = gulp.src([paths.cssPath + "/*.min.css", "!" + paths.cssPath + "/responsive.min.css",  "!" + paths.cssPath + "/style.min.css"], { read: false });

    return target
        .pipe(inject(sourcesJs, {
            addRootSlash: false,
            transform: function (filePath, file, i, length) {
                //var newPath = filePath.replace('../Client', '');
                return '<script src="./' + filePath + '"></script>';
            }
        }))
        .pipe(inject(sourceCss, {
            addRootSlash: false,
            transform: function (filePath, file, i, length) {
                //var newPath = filePath.replace('../Client', '');
                return '<link rel="stylesheet" href="./' + filePath + '">';
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('minImg', function () {
    return gulp.src(paths.imgPath + '/*')
        .pipe(imagemin())
        .pipe(gulp.dest(paths.imgPath))
});

gulp.task('build', function () {
    runSequence('minImg','minCSS', 'minAppJS', 'min3rdJS', 'injectToHtml');
});