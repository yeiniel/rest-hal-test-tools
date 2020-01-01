
import * as executionContext from "./execution-context";
import * as httpMethod from "./http-method";

/** Test that resource handle `method`.
 *
 * This is a test macro. It can be used to test handling any HTTP method
 * supported by SuperAgent.
 *
 * Example use of this test in typescript:
 * ```
 * import anyTest, { TestInterface } from "ava";
 * import express from "express";
 * import superTest from "supertest";
 *
 * import * as restHALTestTools from "@yeiniel/rest-hal-test-tools";
 *
 * const test = anyTest as TestInterface<restHALTestTools.IContext>;
 *
 * test.beforeEach((t) => {
 *   const app = express();
 *
 *   // provide an endpoint handler for the GET method
 *   app.get("/", (_, res) => { res.end(); });
 *   app.post("/", (_, res) => { res.status(405).end(); });
 *
 *   t.context.agent = superTest(app);
 *   t.context.resource = "/";
 * });
 *
 * // resource handle get requests
 * test(restHALTestTools.implement, "get");
 *
 * // resource do not handle post requests
 * test(restHALTestTools.implement, "post", false);
 * ```
 *
 * @param t Test execution context
 * @param method Http method
 * @param expected Whether it is expected or not that resource handle `method` (true by default)
 */
export async function implement(t: executionContext.ExecutionContext, method: httpMethod.HttpMethod, expected = true) {
    const response = await t.context.agent[method](t.context.resource);

    t[expected ? "not" : "is"](response.status, 405);
}

// set the test title
implement.title = (providedTitle = "", method: string, expected: boolean = true) =>
    `${providedTitle} should ${expected ? "" : "not"} implement ${method}`.trim();
