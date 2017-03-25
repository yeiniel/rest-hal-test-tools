
import * as ava from "ava";
import * as superTest from "supertest";

export interface IRestHalTestContextContext {

    resource: string;

    agent: superTest.SuperTest<superTest.Test>;
}

/** Ava Contextual Test Context specific for the REST HAL tools.
 *
 * A specialized Contextual Test Context is provided to specify the required
 * elements that are expected to be provided by the Ava test context. This
 * elements are: the URL of the resource under test and the SuperTest agent to
 * use.
 */
export interface IRestHalTestContext extends ava.ContextualTestContext {

    context: IRestHalTestContextContext;
}
