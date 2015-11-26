var Promise = require('bluebird');

Promise.config({
    warnings : false
});

var PromiseEnsurer = require('../lib');

describe('Promise ensurer', function () {

    describe('when receiving an undefined value', function () {

        it('should return a promise', function () {
            // Catching it to remove warning log
            var result = PromiseEnsurer.ensure().catch(function () {});
            expect(result instanceof Promise).toBe(true);
        });

        it('should return a rejected promise', function (done) {
            PromiseEnsurer.ensure(undefined).then(function(){
                done.fail();
            }).catch(function () {
                done();
            });
        });
    });

    describe('when receiving an object', function () {

        var jedi;

        beforeEach(function () {
            jedi = {
                name : 'Luke Skywalker'
            };
        });

        it('should return a promise', function () {
            var result = PromiseEnsurer.ensure(jedi);
            expect(result instanceof Promise).toBe(true);
        });

        it('should return a resolved promise with the given object', function (done) {
            PromiseEnsurer.ensure(jedi).then(function(returnedJedi){
                expect(jedi).toEqual(returnedJedi);
            }).catch(function(){
                done.fail();
            }).finally(function () {
                done();
            })
        });
    });

    describe('when receiving a boolean value', function () {

        it('should return a promise', function () {
            var result = PromiseEnsurer.ensure(true);
            expect(result instanceof Promise).toBe(true);
        });

        it('should return a resolved promise if it\'s true', function (done) {
            PromiseEnsurer.ensure(true).then(function(){
                done();
            });
        });

        it('should return a rejected promise if it\'s false', function (done) {
            PromiseEnsurer.ensure(false).then(function(){
                done.fail();
            }).catch(function () {
                done();
            });
        })
    });
});
