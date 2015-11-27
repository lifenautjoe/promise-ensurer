# promise-ensurer

[![NPM](https://nodei.co/npm/promise-ensurer.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/promise-ensurer/)

[![Build Status](https://travis-ci.org/thefabulousdev/promise-ensurer.svg?branch=master)](https://travis-ci.org/thefabulousdev/promise-ensurer)[![dependencies](https://david-dm.org/thefabulousdev/promise-ensurer.svg)](https://david-dm.org/thefabulousdev/promise-ensurer)

## Motivation
To provide it's users a way to handle different types of values as a promise.

## Installation

    npm install promise-ensurer

## Notes
 - The generated promises are **[bluebird](http://bluebirdjs.com/)** promises 

## Usage

```js
var PromiseEnsurer = require('promise-ensurer');

// Returns a promise which will be rejected
PromiseEnsurer.ensure();

// Returns a promise which will be resolved
PromiseEnsurer.ensure(true); 

// Returns a promise which will be rejected
PromiseEnsurer.ensure(false);

// Returns a promise which will be resolved with the given object
PromiseEnsurer.ensure({ name : 'Joe'});

// Returns the same given promise
PromiseEnsurer.ensure(someGivenPromise);
```

## Run Tests

``` bash
  $ npm install --dev
  $ npm test
```

#### Author: [Joel Hernández](https://github.com/thefabulousdev)
