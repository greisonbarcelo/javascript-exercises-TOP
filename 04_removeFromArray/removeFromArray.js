const removeFromArray = function(arr, ...remove) {
    return arr.filter(item => !remove.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
// console.log(removeFromArray([1, 2, 3, 4], 3));