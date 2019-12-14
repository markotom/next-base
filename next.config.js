const dotenv = require('dotenv');
const { resolve } = require('path');

const env = process.env.NODE_ENV || 'development';

dotenv.config({
  path: resolve(__dirname, `./.env.${env}`),
})

dotenv.config({
  path: resolve(__dirname, './.env'),
})

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    appHost: process.env.APP_HOST,
    appPort: process.env.APP_PORT,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiHost: process.env.API_HOST,
  },
};
