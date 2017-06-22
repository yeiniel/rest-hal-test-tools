
import ava from "ava";
import * as express from "express";
import * as superTest from "supertest";

import * as resourceGETMethodImplementServerDrivenContentNegotiation
  from "./resource-get-method-implement-server-driven-content-negotiation";

ava.beforeEach((t) => {
    const app = express();

    // provide an endpoint handler for the GET method
    app.get("/", (_, res) => {
      res.format({
        default: () => res.status(406).end(),
      });
    });

    t.context.agent = superTest(app);
    t.context.resource = "/";
});

ava(resourceGETMethodImplementServerDrivenContentNegotiation.resourceGETMethodImplementServerDrivenContentNegotiation);
