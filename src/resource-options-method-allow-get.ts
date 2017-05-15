
import * as testContext from "./test-context";

/** Test that resource implement the GET method
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
 *    t.context.agent = superTest(app);
 *    t.context.resource = "/";
 * });
 *
 * ava(restHALTestTools.resourceOPTIONSMethodAllowGET);
 * ```
 */
export async function resourceOPTIONSMethodAllowGET(t: testContext.TestContext) {
  const response = await t.context.agent.options(t.context.resource);

  t.not(response.header.allow.indexOf("GET"), -1);
}
