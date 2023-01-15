import ava, { TestFn } from 'ava';
import { IContext } from "./execution-context";
import { HttpMethod } from "./http-method";

const test = ava as TestFn<IContext>;

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
export const implement = test.macro<[HttpMethod, boolean?]>({
    exec: async (t, method: HttpMethod, expected = true) => {
        const response = await t.context.agent[method](t.context.resource);

        const assertion: (v: number, e: number) => void = expected ? t.not : t.is;

        assertion(response.status, 405);
    },
    title: (providedTitle = "", method: string, expected = true) =>
    `${providedTitle} should ${expected ? "" : "not"} implement ${method}`.trim()
});
