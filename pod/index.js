var exec = require('promised-exec');
var Promise = require('promise');

var folder = __dirname + '/../../media';


function init(baseUrl, server) {
  register(baseUrl, server);
}

function register(baseUrl, server) {

  server.get(baseUrl + '/pod/list', listFiles);
  server.get(baseUrl + '/pod/start', playFile);
  server.get(baseUrl + '/pod/status', getStatus);
  server.get(baseUrl + '/pod/stop', stop);
  server.get(baseUrl + '/pod/pause', pause);

}

function playFile(req, res) {}
function getStatus(req, res) {}
function stop(req, res) {}
function pause(req, res) {}

function listFiles(req, res) {

  var promisedFiles = listPrograms(folder)
    .then(files => files.filter(line => line.length))
    .then(files => files.map(file => decorateWithFileInfo(file)));

  promisedFiles.then(files => Promise.all(files).then(files => {
    res.json(files);
    res.end();
  }));

}

function decorateWithFileInfo(file) {
  return info(file).then(result => {
    return {
      fileName: file,
      duration: result
    };
  });
}

function info(file) {
  var filter = "grep Duration | awk '{ print $2 }'";
  return exec("ffmpeg -i " + file + " 2>&1 | " + filter)
        .then(result => result.substr(0, result.length - 2));
}

listFiles();

function listPrograms(path) {
  return exec('find ' + path + ' -type f')
    .then(function(programs) {
      return programs.split('\n');
    });
}

module.exports = init;
