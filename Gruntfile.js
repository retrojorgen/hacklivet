module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
        requirejs: {
            compile: {
                    options: {
                    baseUrl: "path/to/base",
                    mainConfigFile: "path/to/config.js",
                    out: "path/to/optimized.js"
                }
            }
        },
		**/
        less: {
            production: {
                options: {
                    paths: ['less'],
                    yuicompress: true
                },
                files: {
                    'src/css/article-styles.css': 'src/less/article-styles.less',
                    'src/css/styles.css': 'src/less/styles.less'
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
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'less']);
    grunt.registerTask('test', ['jshint']);
};