module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            css: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['*.jpg', '*.png'],
                    dest: 'distro/img/'
                }]
            },
            javascript: {
                files: [{
                    expand: true,
                    cwd: 'src/scripts/lib/',
                    src: ['require.minified.js'],
                    dest: 'distro/js'
                }]
            }
        },
        less: {
            production: {
                options: {
                    paths: ['less'],
                    yuicompress: true
                },
                files: {
                    'distro/css/article-styles.css': 'src/less/article-styles.less',
                    'distro/css/styles.css': 'src/less/styles.less'
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/scripts/hacklife/*.js'],
            options: {
                camelcase: true,
                eqeqeq: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noempty: true,
                nonew: true,
                plusplus: true,
                quotmark : true,
                undef: true,
                unused: true,
                trailing: true,
                maxparams: 4,
                maxdepth: 3,
                maxstatements: 14,
                maxlen: 100,
                jquery: true,
                browser: true, // to allow global browser variables
                // options here to override JSHint defaults
                predef : ['define', 'require'],
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        clean : {
            distro : {
                src : ['distro']
            }
        },
        requirejs: {
            compile: {
                options: {
                    almond: true,
                    wrap: true,
                    name: 'config',
                    baseUrl: 'src/scripts/lib',
                    mainConfigFile: 'src/scripts/config.js',
                    out: 'distro/js/hacklife.js'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'jshint', 'less', 'copy', 'requirejs']);
    grunt.registerTask('test', ['jshint']);
};