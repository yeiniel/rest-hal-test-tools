
import anyTest, { TestInterface } from "ava";
import express from "express";
import superTest from "supertest";

import * as restHALTestTools from ".";

const test = anyTest as TestInterface<restHALTestTools.IContext>;

test.beforeEach((t) => {
    const app = express();

    // provide an endpoint handler for the GET method
    app.get("/", (_, res) => { res.end(); });

    t.context.agent = superTest(app);
    t.context.resource = "/";
});

// resource options allow get
test(restHALTestTools.optionsAllow, "get");

// resource options do not allow post
test(restHALTestTools.optionsAllow, "post", false);
