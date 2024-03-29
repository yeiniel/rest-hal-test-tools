
import ava, { TestFn } from 'ava';
import { IContext } from "./execution-context";
import { HttpMethod } from "./http-method";

const test = ava as TestFn<IContext>;

/** Test that resource options handler indicate that `method` is allowed.
 *
 * This is a test macro. It can be used to test if any method is indicated to
 * be allowed.
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
 *    app.get("/", (_, res) => { res.end(); });
 *
 *    t.context.agent = superTest(app);
 *    t.context.resource = "/";
 * });
 *
 * // resource options allow get
 * test(restHALTestTools.optionsAllow, "get");
 *
 * // resource options do not allow post
 * test(restHALTestTools.optionsAllow, "post", false);
 * ```
 *
 * @param t Test execution context
 * @param method Http method
 * @param expected Whether it is expected or not that resource options handler allow `method` (true by default)
 */
export const optionsAllow = test.macro<[HttpMethod, boolean?]>({
    exec: async(t, method: HttpMethod, expected = true) => {
        const response = await t.context.agent.options(t.context.resource);

        const assertion: (v: number, e: number) => void = expected ? t.not : t.is;

        assertion(response.header.allow.indexOf(method.toUpperCase()), -1);
    },
    title: (providedTitle = "", method: string, expected = true) =>
        `${providedTitle} options should ${expected ? "" : "not"} allow ${method}`.trim()
});
