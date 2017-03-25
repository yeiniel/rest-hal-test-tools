
'use strict';

const ava = require('ava'),
      restHalTestTools = require('../');

ava("resourceImplementOptionsMethod fail if agent not provided", (t) => {
  t.throws(() => {
    let testContext = { context: {} };

    restHalTestTools.resourceImplementOptionsMethod({ context: {} });
  }, 'Cannot read property \'options\' of undefined');
});
