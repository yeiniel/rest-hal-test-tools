
'use strict';

const ava = require('ava'),
  restHalTestTools = require('../'),
  superTest = require('supertest');

ava("resourceImplementOptionsMethod fail if agent not provided", (t) => {
  let testContext = { context: {} };

  t.throws(
    restHalTestTools.resourceImplementOptionsMethod.bind(null, testContext),
    'Cannot read property \'options\' of undefined'
  );
});

ava("resourceImplementOptionsMethod fail if resource not provided", (t) => {
  let testContext = { context: {
    agent: superTest('http://some.api')
  } };

  t.throws(
    restHalTestTools.resourceImplementOptionsMethod.bind(null, testContext),
    'undefined'
  );
});

ava("resourceImplementOptionsMethod fail if status is not 200", (t) => {
  function handler(_, res){
    res.statusCode = 300;
    res.end();
  }

  let testContext = { context: {
    resource: "/",
    agent: superTest(handler)
  } };

  restHalTestTools.resourceImplementOptionsMethod(testContext)
    .end((res) => { t.ifError(res); });
});

ava("resourceImplementOptionsMethod succeed if status is 200", (t) => {
  function handler(_, res){
    res.statusCode = 200;
    res.end();
  }

  let testContext = { context: {
    resource: "/",
    agent: superTest(handler)
  } };

  restHalTestTools.resourceImplementOptionsMethod(testContext)
    .end((res) => { t.is(res, null); });
});
