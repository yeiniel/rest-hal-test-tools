
import test from "ava";

import * as package_ from ".";

test("should expose implement", (t) => {
    t.is(typeof package_.implement, "function");
});

test("should expose implementSDCN", (t) => {
    t.is(typeof package_.implementSDCN, "function");
});

test("should expose optionsAllow", (t) => {
    t.is(typeof package_.optionsAllow, "function");
});
