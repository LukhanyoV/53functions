module.exports = function(sentence){
    return sentence.split(" ").map(word => word.length).reduce((a,b) => a+b, 0)
}