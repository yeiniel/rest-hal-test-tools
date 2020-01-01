
import test from "ava";

import * as rhtt from ".";

test("should expose package version", (t) => {
    t.is(typeof rhtt.version, "string");
});