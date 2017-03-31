
'use strict';

const ava = require('ava'),
  restHalTestTools = require('../'),
  superTest = require('supertest');

ava("resourceImplementGetMethod fail if agent not provided", (t) => {
  t.throws(
    restHalTestTools.resourceImplementGetMethod.bind(null, t),
    'Cannot read property \'get\' of undefined'
  );
});

ava("resourceImplementGetMethod fail if resource not provided", (t) => {
  t.context.agent = superTest('http://some.api');

  t.throws(
    restHalTestTools.resourceImplementGetMethod.bind(null, t),
    'undefined'
  );
});

ava("resourceImplementGetMethod fail if status is not 200", (t) => {
  function handler(_, res){
    res.statusCode = 300;
    res.end();
  }

  t.context.resource = "/";
  t.context.agent = superTest(handler);

  restHalTestTools.resourceImplementGetMethod(t)
    .end((res) => { t.ifError(res); });
});

ava("resourceImplementGetMethod succeed if status is 200", (t) => {
  function handler(_, res){
    res.statusCode = 200;
    res.end();
  }

  t.context.resource = "/";
  t.context.agent = superTest(handler);

  return restHalTestTools.resourceImplementGetMethod(t);
});
