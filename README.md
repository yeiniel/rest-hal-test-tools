# Tests for RESTful APIs using HAL+JSON media type
[![Build Status](https://travis-ci.org/yeiniel/rest-hal-test-tools.svg?branch=master)](https://travis-ci.org/yeiniel/rest-hal-test-tools)
[![Coverage Status](https://coveralls.io/repos/github/yeiniel/rest-hal-test-tools/badge.svg?branch=master)](https://coveralls.io/github/yeiniel/rest-hal-test-tools?branch=master)

This project provide common tests for [REST][rest] APIs that use the
[JSON Hypertext Application Language][hal] Media Type. Provided tests
are meant to be used with the [AVA][ava] JavaScript test runner and
employ the [SuperTest][supertest] HTTP assertion library.

## Installation
`rest-hal-test-tools` runs on Node.js and is available as an NPM
package. You can install `rest-hal-test-tools` in your project's
directory as usual:

    npm install @yeiniel/rest-hal-test-tools --save-dev

## Reference Documentation
Reference documentation for this project can be generated from the
inline comments on source code using the [Typedoc][typedoc]
documentation generator. The following command ease the task:

    npm run typedoc

## Typescript Support
This package is written in [Typescript][typescript] and it provide a
declaration file for its content so you can use it on Typescript
projects without problems.

## Licensing

The code in this project is licensed under MIT license.

[ava]: https://github.com/avajs
[hal]: https://tools.ietf.org/html/draft-kelly-json-hal-08
[rest]: https://en.wikipedia.org/wiki/Representational_state_transfer
[supertest]: https://github.com/visionmedia/supertest
[typedoc]: http://typedoc.org/
[typescript]: https://www.typescriptlang.org/