//npm test
const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const multiplyNumbers = require('../app').multiplyNumbers;
const app = require('../app');

sayHelloResult = app.sayHello();
multiplyNumbersResult = app.multiplyNumbers(3, 2);

describe('App', function(){
        describe('sayHello()', function(){
            it('should say hello world', function(){
     //         let result = sayHello();
            assert.equal(sayHelloResult, 'Hello World');
            });

            it('should return type String', function(){
    //       let result = sayHello();
             assert.typeOf(sayHelloResult, 'string');
            });
        });
        describe('multiplyNumbers()', function(){
             it('should multiply correctly', function(){
    //          let result = multiplyNumbers(3, 2);
            assert.isAtLeast(multiplyNumbersResult, 5);
         });
    });
});