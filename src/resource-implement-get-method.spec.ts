
import ava from "ava";
import * as express from "express";
import * as superTest from "supertest";

import * as resourceImplementGETMethod from "./resource-implement-get-method";

ava.beforeEach((t) => {
    const app = express();

    // provide an endpoint handler for the GET method
    app.get("/", (_, res) => { res.end(); });

    t.context.agent = superTest(app);
    t.context.resource = "/";
});

ava(resourceImplementGETMethod.resourceImplementGETMethod);
