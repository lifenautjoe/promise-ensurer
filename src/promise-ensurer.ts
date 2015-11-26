/**
 * @author joel
 * 25-11-15.
 */
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />

'use strict';

import _ = require('lodash');
import Promise = require('bluebird');
import IsPromise = require('is-promise');


class PromiseEnsurer {

    static UNDEFINED_ERROR_MESSAGE = 'Value is undefined';

    static VALUE_IS_FALSE_ERROR_MESSAGE = 'Value was false';

    /**
     * Checks whether the given value is a promise
     *
     * @param {*} value
     * @returns {boolean}
     */
    static isPromise(value : any) : boolean {
        return IsPromise(value);
    }

    /**
     * Transforms a given value into a promise
     *
     * @param {*} value
     * @returns {Promise}
     */
    static transformToPromise(value : any) : Promise<any> {
        return new Promise((resolve, reject) => {
            if (_.isUndefined(value)) {
                reject(new Error(this.UNDEFINED_ERROR_MESSAGE));
            } else if (_.isBoolean(value)) {
                // The Promise type definitions require a value on both functions
                value ? resolve(undefined) : reject(undefined);
            } else {
                resolve(value);
            }
        });
    }

    /**
     * Ensures that a value is a promise
     *
     * @param {*} value
     * @returns {Promise<*>}
     */
    static ensure(value : any) {
        return this.isPromise(value) ? value : this.transformToPromise(value);
    }
}

export = PromiseEnsurer;
