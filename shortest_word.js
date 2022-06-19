module.exports = function(sentence){
    return sentence.split(" ").sort((a,b) => a.length - b.length)[0]
}