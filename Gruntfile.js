module.exports = function(grunt) {
    var paths = {
        jsbeautifier: ["*.html", "./src/*.html", "./src/**/*.html"],
        sassToCss: {
            dest: './www/css/ionic.app.css',
            src: './scss/ionic.app.scss'
        }
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                strict: false,
                globalstrict: false,
                node: true,
                undef: true,
                globals: {
                    angular: true,
                    cordova: true,
                    app: true,
                    StatusBar: true,
                    CameraPopoverOptions: true,
                    ionic: true,
                    Camera: true
                },
            },

            files: {
                src: []
            }

        },

        jsbeautifier: {
            files: paths.jsbeautifier,
            options: {
                html: {
                    "braceStyle": "collapse",
                    "indentChar": " ",
                    "indentScripts": "keep",
                    "indentSize": 4,
                    "maxPreserveNewlines": 10,
                    "preserveNewlines": true,
                    "unformatted": ["a", "sub", "sup", "b", "i", "u"],
                    "wrapLineLength": 0,
                    "extra_liners": true
                },
                css: {
                    "fileTypes": [".scss"],
                    "indentChar": " ",
                    "indentSize": 4,
                    "indent_with_tabs": false,
                    "selector-separator-newline": true,
                    "newline-between-rules": true
                },
                js: {}
                }
        },

        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded',
                    quiet: false,
                    trace: true,
                    lineNumbers: true,
                    update: true
                },
                files: { // Dictionary of files

                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                sourceMap: true
            },
            target: {
                files: {

                }
            }

        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: true
            },
            dist: {
                files: {

                }
            }
        },
        tsfmt: {
            options: {
                // Task-specific options go here.
            },
            files: {
                src: ['./src/**/*.ts']
            },
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['notify:gruntChange']
            },
            sass_css: {
                files: ['./scss/*.scss'],
                tasks: ['sass']
            },
            js_beautify: {
                files: paths.jsbeautifier,
                tasks: ['jsbeautifier']
            },
            css: {
                files: [],
                tasks: ['cssmin']
            },
            js_lint: {
                files: [],
                tasks: ['jshint']
            },
            js_minify: {
                files: [],
                tasks: ['uglify']
            },
            tsfmt: {
                files: ['./src/**/*.ts'],
                tasks: ['tsfmt']
            }
        }
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-tsfmt');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //register grunt default task
    grunt.registerTask('default', ['jsbeautifier', 'jshint', 'sass', 'cssmin', 'uglify', 'tsfmt']);
    grunt.registerTask('set', ['jsbeautifier', 'jshint', 'sass', 'cssmin', 'uglify', 'tsfmt', 'watch']);
};