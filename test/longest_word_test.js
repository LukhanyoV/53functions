var longest_word = require("../longest_word")
var assert = require("assert")

describe("longest_word", function(){

    it("should return 'Lukhanyo' for this sentence 'hello world my name is Lukhanyo'", function(){
        assert.equal(longest_word("hello world my name is Lukhanyo"), "Lukhanyo")
    })

    it("should return 'message' for this sentence 'hello this is just a long message'", function(){
        assert.equal(longest_word("hello this is just a long message"), "message")
    })

})