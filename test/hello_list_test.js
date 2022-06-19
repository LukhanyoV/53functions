var hello_list = require("../hello_list")
var assert = require("assert")

describe('hello_list', function(){

    it("should return a list with 1 'hello world' entries for the number 1", function(){
        assert.deepEqual(hello_list(1), ["hello world"])
    });

    it("should return a list with 4 'hello world' entries for the number 4", function(){
        assert.deepEqual(hello_list(4), ["hello world","hello world","hello world","hello world"]);
    });

})