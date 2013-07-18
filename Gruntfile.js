module.exports = function(grunt) {
  grunt.initConfig({
    fabricate: {
      app: {
        src: 'app.js',
        dest: 'dest/app.js',
        include: ['src'],
        tmpDir: 'tmp'
      },
      lib: {
        src: 'lib.js',
        dest: 'dest/lib.js',
        include: ['vendor'],
        sourceMap: false,
        tmpDir: 'tmp'
      }
    },

    emberTemplates: {
      options: {
        templateName: function(src) {
          return src.replace(/templates\//, '');
        }
      },
      compile: {
        files: {
          'dest/templates.js': ['templates/**/*.{hbs,handlebars}']
        }
      }
    },

    chauffeur: {
      dev: {
        port: 8000,
        staticFiles: ['dest', 'tmp']
      }
    },

    copy: {
      html: {
        src: 'src/index.html',
        dest: 'dest/index.html'
      }
    },

    clean: {
      tmp: 'tmp/*',
      dest: 'dest/*'
    },

    watch: {
      app: {
        files: ['src/**/*.js'],
        tasks: ['fabricate:app']
      },
      lib: {
        files: ['vendor/**/*.js'],
        tasks: ['fabricate:lib']
      },
      lib: {
        files: ['templates/**/*.{hbs,handlebars'],
        tasks: ['emberTemplates']
      },
      html: {
        files: ['src/index.html'],
        tasks: ['copy:html']
      },
      templates: {
        files: ['templates/**/*.{hbs,handlebars}'],
        tasks: ['emberTemplates:compile']
      }
    }
  });

  grunt.loadNpmTasks('grunt-fabricate');
  grunt.loadNpmTasks('grunt-chauffeur');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['clean', 'emberTemplates', 'fabricate', 'copy', 'chauffeur', 'watch']);
};
