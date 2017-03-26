/* Common tests for REST resources */

import * as superTest from "supertest";

import * as restHalTestContext from "./rest-hal-test-context";

/** Check if the resource under test implement the GET method */
export function resourceImplementGetMethod(
    t: restHalTestContext.IRestHalTestContext): superTest.Test {
  let request =  t.context.agent.get(t.context.resource);

  return request.expect((res) => {
    t.true(res.status >= 200 && res.status < 400);
  });
}
