
import anyTest, { TestInterface } from "ava";
import express from "express";
import superTest from "supertest";

import * as restHALTestTools from ".";

const test = anyTest as TestInterface<restHALTestTools.IContext>;

test.beforeEach((t) => {
    const app = express();

    // provide an endpoint handler for the GET method
    app.get("/", (_, res) => {
        res.format({
            default: () => res.status(406).end(),
            json: () => res.json({}).end(),
        });
    });

    t.context.agent = superTest(app);
    t.context.resource = "/";
});

// resource handle get requests server driven content negotiation
test(restHALTestTools.implementSDCN, "get");
