
import anyTest, { TestInterface } from "ava";
import express from "express";
import superTest from "supertest";

import * as restHALTestTools from ".";

const test = anyTest as TestInterface<restHALTestTools.IContext>;

test.beforeEach((t) => {
   const app = express();

   // provide an endpoint handler for the GET method
   app.get("/", (_, res) => { res.end(); });
   app.post("/", (_, res) => { res.status(405).end(); });

   t.context.agent = superTest(app);
   t.context.resource = "/";
});

// resource handle get requests
test(restHALTestTools.implement, "get");

// resource do not handle post requests
test(restHALTestTools.implement, "post", false);
