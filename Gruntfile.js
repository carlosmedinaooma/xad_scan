module.exports = function (grunt) {
  'use strict';

  var secret = {};
  try {
    secret = grunt.file.readJSON('secret.json');
  } catch (err) {}

  // Project configuration.
  grunt.initConfig({
    // secret.json contains the host, username and password for a server to
    // run the tests on.
    secret: secret,
    scp: {
      options: {
       host: '10.66.12.193',
       username: 'railsuser',
       password: 'ruser-1234'
      },
      deploy: {
        files: [{
         cwd: '/var/www/html/staging/xad/current/',
         src: '*.js *.json *.txt',
         filter: 'isFile',
         dest: '/var/www/html/staging/xad/current/'
        }]
      },
    },
    sftp: {
      deploy: {
        files: {
          "./*.json": "./*.json",
          "./*.js": "./*.js",
          "./*.txt": "./*.txt" 
        },
        options: {
          host: '10.66.12.193',
          username: 'railsuser',
          password: 'ruser-1234',
          path: '/var/www/html/staging/xad/current/'
        }
      }
    },
    sshexec: {
      list: {
        // single command
        // command: 'uptime',
        // multiple commands
        command: ['/usr/local/bin/forever list' ],
        options: {
          host: '10.66.12.193',
          username: 'railsuser',
          password: 'ruser-1234'
        }
      },
      stop: {
        // single command
        // command: 'uptime',
        // multiple commands
        command: ['forever stop "xad"'],
        options: {
          host: '10.66.12.193',
          username: 'railsuser',
          password: 'ruser-1234'
        }
      },
      start: {
        // single command
        // command: 'uptime',
        // multiple commands
        command: ['cd /var/www/html/staging/xad/current;/usr/local/bin/forever list;/usr/local/bin/forever start --uid "xad" -a /var/www/html/staging/xad/current/xad.js ' , '/usr/local/bin/forever list'],
        options: {
          host: '10.66.12.193',
          username: 'railsuser',
          password: 'ruser-1234'
        }
      },
      deploy: {
        command: ['cd /var/www/html/staging/xad/current;forever  start --uid xad -a  ./xad.js ' ],
        options: {
          host: '10.66.12.193',
          username: 'railsuser',
          password: 'ruser-1234'
        }
    }
  }
});

  // Actually load this plugin's tasks
//  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-scp');
  grunt.loadNpmTasks('grunt-ssh');
  grunt.loadNpmTasks('grunt-beautify');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-npm');

  // Default task.
  //grunt.registerTask('default', ['jshint', 'nodeunit']);

  grunt.registerTask('tidy', ['beautify']);

};
