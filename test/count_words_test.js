var count_words = require("../count_words")
var assert = require("assert")

describe("count_words", function(){

    it("should return '6' for this sentence 'hello world my name is Lukhanyo'", function(){
        assert.equal(count_words("hello world my name is Lukhanyo"), 6)
    })

    it("should return '7' for this sentence 'hello this is just a long message'", function(){
        assert.equal(count_words("hello this is just a long message"), 7)
    })

})