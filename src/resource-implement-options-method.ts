/* Common tests for REST resources */

import * as superTest from "supertest";

import * as restHalTestContext from "./rest-hal-test-context";

/** Check if the resource under test implement the OPTIONS method */
export function resourceImplementOptionsMethod(
        t: restHalTestContext.IRestHalTestContext): superTest.Test {
    let request =  t.context.agent.options(t.context.resource);

  return request.expect((res) => {
    t.true(res.status >= 200 && res.status < 400);
  });
}
