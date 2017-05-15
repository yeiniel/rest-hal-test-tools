
import * as ava from "ava";
import * as superTest from "supertest";

/** Test context for RESTful tests
 *
 * Each test require a SuperTest agent and a resource path.
 */
export interface ITestContext {

    /** SuperTest agent */
    agent: superTest.SuperTest<superTest.Test>;

    /** Resource path */
    resource: string;
}

/** Type for test function parameter `t` */
export type TestContext = ava.TestContext & ava.Context<ITestContext>;
