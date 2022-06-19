var shortest_word = require("../shortest_word")
var assert = require("assert")

describe("shortest_word", function(){

    it("should return 'my' for this sentence 'hello world my name is Lukhanyo'", function(){
        assert.equal(shortest_word("hello world my name is Lukhanyo"), "my")
    })

    it("should return 'a' for this sentence 'hello this is just a long message'", function(){
        assert.equal(shortest_word("hello this is just a long message"), "a")
    })

})