import superagent from 'superagent';

require('superagent-as-promised')(superagent);

export function request(url) {
  function fromJson(res) {
    if (typeof res === 'string' && res !== '') {
      try {
        return JSON.parse(res);
      } catch (err) {
        console.log(`Could not parse '${res}'`); // eslint-disable-line no-console
      }
      return undefined;
    } else {
      return res;
    }
  }

  return superagent
    .get(url)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .then(response => response.body)
    .then(fromJson);
}
