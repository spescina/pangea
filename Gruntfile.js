module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        copy: {
            publish: {
                files: [
                    {
                        expand: true,
                        cwd: 'workbench/psimone/platform-core/public',
                        src: ['**'],
                        dest: 'public/packages/psimone/platform-core'
                    }
                ]
            }
        },
        clean: {
            dev: [
                'public/packages/psimone/platform-core'
            ]
        },
        watch: {
            publish: {
                files: [
                        'workbench/psimone/platform-core/public/src/**/*',
                        'workbench/psimone/platform-core/public/tpl/*',
                        '!workbench/psimone/platform-core/public/src/css/scss/*',
                        '!workbench/psimone/platform-core/public/src/css/*.map',
                ],
                tasks: ['copy:publish'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'clean', 'watch']);

};