const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // Nível mínimo de log (pode ser 'info', 'warn', 'error', etc.)
  format: winston.format.simple(), // Formato do log
  transports: [
    new winston.transports.Console(), // Saída para o console
    new winston.transports.File({ filename: 'app.log' }) // Saída para um arquivo
  ],
});

module.exports = logger;
