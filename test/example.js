const Ava = require('ava');

let react_express = require('./index.js');

// Ava
Ava('ava test', t => {
  t.pass(react_express.makeApplication());
});