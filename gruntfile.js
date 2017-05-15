module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    '_/js/script.js': ['_/components/js/*.js']
                }
            }
        }, //uglify
        compass:{
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            options: {livereload: true},
            scripts: {
                files: ['_/components/js/*.js'],
                tasks: ['uglify']
            }, // script
            sass: {
                files: ['_/components/sass/*.scss'],
                tasks: ['compass:dev']
            },
            html: {
                files: ['*.html']
            }
        } // watch
    })
    grunt.registerTask('default', 'watch');
}