module.exports = function(grunt){
	grunt.initConfig({
		//jshint: {
		//	all: ['public/javascripts/**/*.js']
		//},
		/*uglify: {
			build: {
				src: 'public/javascripts/main.js',
				dest: 'public/build/main.min.js'
			}
		},*/
		removelogging:{
			dist:{
				src:'public/javascripts/main.js',
				dest:'public/build/main.js'
			}
		}
		
	});

		//grunt.loadNpmTasks('grunt-contrib-uglify');
		//grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-remove-logging');

		//grunt.registerTask('default', ['uglify', 'jshint']);
		grunt.registerTask('default', 'removelogging');
};