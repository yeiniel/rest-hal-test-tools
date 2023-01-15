
import test from "ava";

import * as package_ from ".";

test("should expose implement", (t) => {
    t.is(typeof package_.implement, "object");
});

test("should expose implementSDCN", (t) => {
    t.is(typeof package_.implementSDCN, "object");
});

test("should expose optionsAllow", (t) => {
    t.is(typeof package_.optionsAllow, "object");
});
