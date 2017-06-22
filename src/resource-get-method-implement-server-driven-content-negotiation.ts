
import * as testContext from "./test-context";

/** Test that resource GET method implement Server Driven Content Negotiation
 *
 * see [[ITestContext]] for more info on how to establish the URL of the resource
 * under test and the agent used to reach it.
 *
 * Example usage in typescript:
 * ```
 * import ava from "ava";
 * import * as express from "express";
 * import * as superTest from "supertest";
 *
 * import * as restHALTestTools from "@zephyrec/rest-hal-test-tools";
 *
 * ava.beforeEach((t) => {
 *    const app = express();
 *
 *    // provide an endpoint handler for the GET method
 *   app.get("/", (_, res) => {
 *     res.format({
 *       default: () => res.status(406).end(),
 *     });
 *   });
 *
 *    t.context.agent = superTest(app);
 *    t.context.resource = "/";
 * });
 *
 * ava(restHALTestTools.resourceGETMethodImplementServerDrivenNegotiation);
 * ```
 */
export async function resourceGETMethodImplementServerDrivenContentNegotiation(t: testContext.TestContext) {
  const response = await t.context.agent.get(t.context.resource)
    .set("Accept", "not-supported-content-type");

  t.is(response.status, 406);
}
