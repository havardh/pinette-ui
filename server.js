var express = require('express');
var server = express();
var exec = require('child_process').exec;

const path = process.env.BIN_DIR || '../mock';
const apiPath = '/api';

var pod = require('./pod');

server.use(express.static(process.cwd() + '/client'));

server.all("*", function(req, res, next) {
  console.log('GET:', req.url);
  next();
});

function listPrograms(path, cb) {
  return exec('find ' + path + ' -type f', function(err, programs, stderr) {
    cb(programs.split('\n'));
  });
}

listPrograms(path, function (programs) {
  programs
    .forEach(function(program) {
      server.get(program.replace(path, apiPath), function(req, res) {
        exec(program, function(err, stdout, stderr) {
          res.json({response: stdout});
          res.end();
        });
      });
    });
});

pod(apiPath, server);

server.listen(80);
