/* eslint-disable no-param-reassign */
import _ from 'lodash';
import superagent from 'superagent';
import Promise from 'bluebird';

require('superagent-as-promised')(superagent);

export function request(options) {
  return new Promise((resolve, reject) => {
    options = _.defaults(options || {}, {
      type: 'json',
      method: 'get',
      contentType: 'application/json',
    });

    if (options.hasOwnProperty('data') && typeof options.data === 'object') {
      options.data = JSON.stringify(options.data);
    }

    let requestObject = superagent[options.method](options.url);
    requestObject = requestObject.send(options.data);

    requestObject
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .endAsync()
      .then(response => resolve(response.body))
      .then(res => JSON.parse(res))
      .catch(error => reject(error));
  });
}
