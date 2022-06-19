var reverse = require('../reverse');
var assert = require('assert');

describe("reverse", function(){

    it("should return \"oynahkuL\" for the string \"Lukhanyo\"", function(){
        assert.equal(reverse("Lukhanyo"), "oynahkuL")
    });

    it("should return undefined for the string ''", function(){
        assert.equal(reverse(""), undefined);
    });

});
