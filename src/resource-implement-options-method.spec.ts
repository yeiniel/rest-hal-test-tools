
import ava from "ava";
import * as express from "express";
import * as superTest from "supertest";

import * as resourceImplementOPTIONSMethod from "./resource-implement-options-method";

ava.beforeEach((t) => {
  const app = express();

  // provide an endpoint handler for the GET method
  app.get("/", (_, res) => { res.end(); });

  t.context.agent = superTest(app);
  t.context.resource = "/";
});

ava(resourceImplementOPTIONSMethod.resourceImplementOPTIONSMethod);
