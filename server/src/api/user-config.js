import express from 'express';

const config = express();

let active = [
  'sound',
  'spotify',
];

const list = [
  'sound',
  'spotify',
  'podcast',
  'turntable',
  'radio',
];


config.get('/', (req, res) => {
  res.json(active);
  res.end();
});

config.post('/', (req, res) => {
  active = req.body;
  res.end();
});

config.get('/list', (req, res) => {
  res.json(list);
  res.end();
});


module.exports = config;
