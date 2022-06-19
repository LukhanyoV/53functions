module.exports = function(sentence){
    return sentence.split(" ").sort((a,b) => b.length -a.length)[0]
}