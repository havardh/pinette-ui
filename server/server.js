var express = require('express');
var server = express();
var exec = require('child_process').exec;

const port = process.env.PORT || 3003;
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
      server.get(program.replace(path, ""), function(req, res) {
        let cmd = program;
        if (req.query.value) {
          cmd = program + " " + req.query.value;
        }
        exec(cmd, function(err, stdout, stderr) {
          if (stderr) {
            console.log(stderr);
          }
          res.json(stdout);
          res.end();
        });
      });
    });
});

pod(apiPath, server);

server.listen(port);
