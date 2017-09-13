![promise-ensurer](http://oi64.tinypic.com/10oe0ld.jpg)

[![NPM](https://nodei.co/npm/promise-ensurer.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/promise-ensurer/)

[![Build Status](https://travis-ci.org/lifenautjoe/promise-ensurer.svg?branch=master)](https://travis-ci.org/lifenautjoe/promise-ensurer)

## Motivation
To provide it's users a way to handle different types of values as a promise.

## Installation

    npm install promise-ensurer

## Notes
 - The generated promises are **[bluebird](http://bluebirdjs.com/)** promises 

## Usage

```js
var promiseEnsurer = require('promise-ensurer');

// Returns a promise which will be rejected
promiseEnsurer.ensure();

// Returns a promise which will be resolved
promiseEnsurer.ensure(true); 

// Returns a promise which will be rejected
promiseEnsurer.ensure(false);

// Returns a promise which will be resolved with the given object
promiseEnsurer.ensure({ name : 'Joe'});

// Returns the same given promise
promiseEnsurer.ensure(someGivenPromise);
```

## Run Tests

``` bash
  $ npm install --dev
  $ npm test
```

#### Author: [Joel Hernández](https://github.com/thefabulousdev)
