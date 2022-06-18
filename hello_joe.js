module.exports = function(name){
    return ["Joe", "Bob"].includes(name) ? `Hello!` : `Hello, ${name.toUpperCase()}!`
};
