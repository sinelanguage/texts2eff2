const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';

require('babel-polyfill');
if (env === 'development') {
  // for development use babel/register for faster runtime compilation
  require('babel-register');
}

const app = require('./app');