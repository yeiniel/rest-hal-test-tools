
import * as executionContext from "./execution-context";
import * as httpMethod from "./http-method";

/** Test that resource `method` handling implement Server Driven Content Negotiation
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
 *    const app = express();
 *
 *    // provide an endpoint handler for the GET method
 *    app.get("/", (_, res) => {
 *        res.format({
 *            default: () => res.status(406).end(),
 *            json: () => res.json({}).end(),
 *        });
 *    });
 *
 *    t.context.agent = superTest(app);
 *    t.context.resource = "/";
 * });
 *
 * // resource handle get requests
 * test(restHALTestTools.implementSDCN, "get");
 * ```
 *
 * @param t Test execution context
 * @param method Http method
 * @param notSupportedContentType Content Type not supported by resource
 *      `method` handler used to trigger the handler to respond with a status
 *      code of 406 ("not-supported-content-type" by default).
 */
export async function implementSDCN(t: executionContext.ExecutionContext,
                                    method: httpMethod.HttpMethod,
                                    notSupportedContentType = "not-supported-content-type") {
    const response = await t.context.agent[method](t.context.resource)
        .set("Accept", notSupportedContentType);

    t.is(response.status, 406);
}

// set the test title
implementSDCN.title = (providedTitle = "", method: string, notSupportedContentType = "not-supported-content-type") =>
    `${providedTitle} should implement ${method} server driven content negotiation`.trim();
