var exec = require('promised-exec');
var Promise = require('promise');
var Sound = require('simple-mplayer');

var folder = __dirname + '/../../media';

var player;

function init(baseUrl, server) {
  register(baseUrl, server);
}

function register(baseUrl, server) {

  server.get(baseUrl + '/pod/list', listFiles);
  server.get(baseUrl + '/pod/start/:file', playFile);
  server.get(baseUrl + '/pod/resume', resume);
  server.get(baseUrl + '/pod/stop', stop);
  server.get(baseUrl + '/pod/pause', pause);

}

function playFile(req, res) {
  if (player) {
    res.json({error: "Already playing"});
    res.end();
  } else {
    if (req.params.file) {
      console.log("Playing: ", folder + '/' + req.params.file);
      player = new Sound(folder + '/' + req.params.file);
      player.play({'ao': 'alsa:device=hw=0.0'});
      res.json({status: 'Playing'});
      res.end();
    } else {
      res.json({error: 'No file was provided in request'});
      res.end();
    }
  }
}

function resume(req, res) {
  if (!player) {
    res.json({error: 'Not initialized'});
    res.end();
    return;
  }

  player.resume();
  res.json({status: 'Playing'});
  res.end();
}

function pause(req, res) {
  if (!player) {
    res.json({error: 'Not initialized'});
    res.end();
  } else {
    player.pause();
    res.json({status: 'Paused'});
    res.end();
  }
}

function stop(req, res) {
  if (!player) {
    res.json({error: 'Not initialized'});
    res.end();
    return;
  }

  player.stop();

  res.json({status: 'Stopped'});
  res.end();
  player = null;
}

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
      duration: result
      fileName: file.substr(file.lastIndexOf("/")+1),
    };
  });
}

function info(file) {
  var filter = "grep Duration | awk '{ print $2 }'";
  return exec("avprobe " + file + " 2>&1 | " + filter)
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
