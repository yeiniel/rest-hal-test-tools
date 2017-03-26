
'use strict';

const ava = require('ava'),
  restHalTestTools = require('../'),
  superTest = require('supertest');

ava("resourceImplementOptionsMethod fail if agent not provided", (t) => {
  t.throws(
    restHalTestTools.resourceImplementOptionsMethod.bind(null, t),
    'Cannot read property \'options\' of undefined'
  );
});

ava("resourceImplementOptionsMethod fail if resource not provided", (t) => {
  t.context.agent = superTest('http://some.api');

  t.throws(
    restHalTestTools.resourceImplementOptionsMethod.bind(null, t),
    'undefined'
  );
});

ava("resourceImplementOptionsMethod fail if status is not 200", (t) => {
  function handler(_, res){
    res.statusCode = 300;
    res.end();
  }

  t.context.resource = "/";
  t.context.agent = superTest(handler);

  restHalTestTools.resourceImplementOptionsMethod(t)
    .end((res) => { t.ifError(res); });
});

ava("resourceImplementOptionsMethod succeed if status is 200", (t) => {
  function handler(_, res){
    res.statusCode = 200;
    res.end();
  }

  t.context.resource = "/";
  t.context.agent = superTest(handler);

  return restHalTestTools.resourceImplementOptionsMethod(t);
});
