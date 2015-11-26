/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />
import Promise = require('bluebird');
declare class PromiseEnsurer {
    static isPromise(value: any): boolean;
    static transformToPromise(value: any): Promise<any>;
    static ensure(value: any): any;
}
export = PromiseEnsurer;
