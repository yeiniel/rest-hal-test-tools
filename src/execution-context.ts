
import * as ava from "ava";
import * as superTest from "supertest";

/** Test context
 *
 * Provide an interface into the `context` attribute of the execution context.
 *
 * All tests require the execution context to provide a SuperTest agent and a
 * resource path.
 */
export interface IContext {
    /** SuperTest agent */
    agent: superTest.SuperTest<superTest.Test>;

    /** Path to the resource under test */
    resource: string;
}

/** Execution context as required by tests implemented by this package */
export type ExecutionContext = ava.ExecutionContext<IContext>;
