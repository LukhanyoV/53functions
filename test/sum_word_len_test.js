var sum_word_len = require("../sum_word_len")
var assert = require("assert")

describe("sum_word_len", function(){

    it("should return '26' for this sentence 'hello world my name is Lukhanyo'", function(){
        assert.equal(sum_word_len("hello world my name is Lukhanyo"), 26)
    })

    it("should return '27' for this sentence 'hello this is just a long message'", function(){
        assert.equal(sum_word_len("hello this is just a long message"), 27)
    })

})