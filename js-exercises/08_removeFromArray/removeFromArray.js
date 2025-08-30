const removeFromArray = function(arr, ...arg) {
    return arr.filter(element => !arg.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
