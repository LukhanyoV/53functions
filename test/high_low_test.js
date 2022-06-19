var high_low = require("../high_low")
var assert = require("assert")

describe("high_low", function(){

    it("should return [10, 1] as the highest and lowest from this list [2,4,5,6,7,1,3,10]", function(){
        assert.deepEqual(high_low([2,4,5,6,7,1,3,10]), [10, 1])
    })

    it("should return [7, 2] as the highest and lowest from this list [2,4,5,6,7,1,3,10]", function(){
        assert.deepEqual(high_low([2,4,5,6,7]), [7, 2])
    })
})