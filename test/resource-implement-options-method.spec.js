
'use strict';

const ava = require('ava'),
  restHalTestTools = require('../'),
  superTest = require('supertest');

ava("resourceImplementOptionsMethod fail if agent not provided", (t) => {
  t.throws(() => {
    let testContext = { context: {} };

    restHalTestTools.resourceImplementOptionsMethod(testContext);
  }, 'Cannot read property \'options\' of undefined');
});

ava("resourceImplementOptionsMethod fail if resource not provided", (t) => {
  t.throws(() => {
    let testContext = { context: {
      agent: superTest('http://some.api')
    } };

    restHalTestTools.resourceImplementOptionsMethod(testContext);
  }, 'undefined');
});
