import _ from "lodash";
import superagent from "superagent";
import Promise from "bluebird";

require('superagent-as-promised')(superagent);

export default function request(url) {


  return superagent.get(url);

  return new Promise((resolve, reject) => {
    options = _.defaults(options || {}, {
      type: "json",
      method: "get",
      contentType: "application/json"
    });

    if (options.hasOwnProperty("data") && typeof options.data === "object") {
      options.data = JSON.stringify(options.data);
    }

    console.log(options.method);
    let requestObject = superagent[options.method](options.url);
    requestObject = requestObject.send(options.data);

    requestObject
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .endAsync()
      .then(response => resolve(response.body))
      .catch(error => reject({
        status: error.cause.status,
        response: error.cause.response.body
      }))
  });
}
