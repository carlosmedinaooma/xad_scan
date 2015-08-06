
const winston = require('winston');
const logger = new (winston.Logger)({
   transports: [
     new (winston.transports.DailyRotateFile) ({
       name: 'infofile',
       level: 'info',
       filename: 'log/info.log',
     }),
     new (winston.transports.DailyRotateFile) ({
       name: 'errorfile',
       level: 'error',
       filename: 'log/error.log',
     })
   ],
   exitOnError: false
});

module.exports = {

  log_info: function(request) {
    logger.info( JSON.stringify(request));
  },

  log_error: function(txt) {
    logger.error( txt);
  }

}
