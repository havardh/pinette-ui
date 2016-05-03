const express = require('express');
const generic = express();
const exec = require('child_process').exec;

const binPath = process.env.BIN_DIR || './mock';

function listPrograms(path, cb) {
  return exec(`find ${path} -type f`, (err, programs, stderr) => {
    if (stderr) {
      console.log(stderr); // eslint-disable-line no-console
    }

    cb(programs.split('\n'));
  });
}

listPrograms(binPath, programs => {
  programs
    .forEach(program => {
      generic.get(program.replace(binPath, ''), (req, res) => {
        let cmd = program;
        if (req.query.value) {
          cmd = `${program} ${req.query.value}`;
        }
        exec(cmd, (err, stdout, stderr) => {
          if (stderr) {
            console.log(stderr); // eslint-disable-line no-console
          }
          res.json();
          res.end();
        });
      });
    });
});

module.exports = generic;
