module.exports = function(num){
    const arr = [];
    while(num){
        arr.push(num);
        num--;
    }
    return arr.reduce((a,b)=>a+b, 0);
}
