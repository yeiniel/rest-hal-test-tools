
import ava from "ava";
import * as express from "express";
import * as superTest from "supertest";

import * as resourceOPTIONSMethodAllowGET from "./resource-options-method-allow-get";

ava.beforeEach((t) => {
  const app = express();

  // provide an endpoint handler for the GET method

  t.context.agent = superTest(app);
  t.context.resource = "/";
});

ava(resourceOPTIONSMethodAllowGET.resourceOPTIONSMethodAllowGET);
