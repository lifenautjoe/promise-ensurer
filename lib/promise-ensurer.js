/**
 * @author joel
 * 25-11-15.
 */
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />
'use strict';
var _ = require('lodash');
var Promise = require('bluebird');
var IsPromise = require('is-promise');
var PromiseEnsurer = (function () {
    function PromiseEnsurer() {
    }
    PromiseEnsurer.isPromise = function (value) {
        return IsPromise(value);
    };
    PromiseEnsurer.transformToPromise = function (value) {
        return new Promise(function (resolve, reject) {
            if (_.isUndefined(value)) {
                reject(undefined);
            }
            else if (_.isBoolean(value)) {
                value ? resolve(undefined) : reject(undefined);
            }
            else {
                resolve(value);
            }
        });
    };
    PromiseEnsurer.ensure = function (value) {
        return this.isPromise(value) ? value : this.transformToPromise(value);
    };
    return PromiseEnsurer;
})();
module.exports = PromiseEnsurer;
