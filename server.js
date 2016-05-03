/* eslint-disable no-let, lets-on-top */
require('babel-core/register');

const app = require('./server/index');
const config = require('./config');

app.listen(config.PORT, '0.0.0.0', err => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
    return;
  }

  console.log('Listening at http://0.0.0.0:3000'); // eslint-disable-line no-console
});
