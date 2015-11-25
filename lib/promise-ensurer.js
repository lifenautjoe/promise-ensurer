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
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_.isUndefined(value)) {
                reject(new Error(_this.UNDEFINED_ERROR_MESSAGE));
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
    PromiseEnsurer.UNDEFINED_ERROR_MESSAGE = 'Value is undefined';
    PromiseEnsurer.VALUE_IS_FALSE_ERROR_MESSAGE = 'Value was false';
    return PromiseEnsurer;
})();
module.exports = PromiseEnsurer;
