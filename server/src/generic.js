"use strict";

var express = require('express');
var generic = express();
var exec = require('child_process').exec;

const path = process.env.BIN_DIR || './mock';

function listPrograms(path, cb) {
  return exec('find ' + path + ' -type f', function(err, programs, stderr) {
    cb(programs.split('\n'));
  });
}

listPrograms(path, function (programs) {
  programs
    .forEach(function(program) {
      generic.get(program.replace(path, ""), function(req, res) {
        let cmd = program;
        if (req.query.value) {
          cmd = program + " " + req.query.value;
        }
        exec(cmd, function(err, stdout, stderr) {
          if (stderr) {
            console.log(stderr);
          }
          res.json();
          res.end();
        });
      });
    });
});

module.exports = generic;
