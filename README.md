# transpiler.js

The javascript transpiler transform all *.js* files code from src to lib folder, using [Babel](https://babeljs.io/). The new *.js* are code that run in all browsers, because replace es6 functions and key words for new functions that can be interpreted by all browsers.

## Example

src/demo.js

```javascript
const greetings = ['Welcome', 'Willkommen', 'Hey', 'Gruezi'];

export function next() {
  let idx = Math.floor(Math.random() * greetings.length)
  return greetings[idx];
}

export function nth(n = 0) {
  return greetings[n];
}

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();

```

lib/demo.js

```javascript
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var f1 = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var x;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return resolveAfter2Seconds(10);

          case 2:
            x = _context.sent;

            console.log(x); // 10

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function f1() {
    return _ref.apply(this, arguments);
  };
}();

exports.next = next;
exports.nth = nth;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var greetings = ['Welcome', 'Willkommen', 'Hey', 'Gruezi'];

function next() {
  var idx = Math.floor(Math.random() * greetings.length);
  return greetings[idx];
}

function nth() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return greetings[n];
}

function resolveAfter2Seconds(x) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(x);
    }, 2000);
  });
}

f1();
```

## Usage
First of all, open a terminal and go in **Transpiler** folder.

Then execute:

> npm install

And, to run the transpiler, execute:

> npm run build

Ready!

### Note

Where reference yours js files, also, you need to add a references to *polyfill.min.js* file, that is in "\node_modules\babel-polyfill\dist" folder, because the transpiled files need the *regeneratorRuntime* definition.

### Settings

In the *.babelrc* file, can change the js compatibility, changing the target configuration:

```json
"targets": {
        "browsers": ["last 1 versions"]
      },
```

In the console, if search the output *Using targets* can see the compatibility of the new js files. For example, for the previous configuration:
```json
Using targets:
{
  "chrome": "64",
  "android": "62",
  "edge": "16",
  "firefox": "58",
  "ie": "11",
  "ios": "11",
  "safari": "11"
}
```

For example, changing *"last 1 versions"* to *"last 2 versions"*, you can to be compatible with ie10, in case of internet explorer. You can se more about this [here](https://babeljs.io/docs/plugins/preset-env/).


## Authors

* afmicc - Extension

## License
MIT © [afmicc](https://github.com/afmicc)

**Enjoy!**
