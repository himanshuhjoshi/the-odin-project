const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if(num == 0) return 0;
    if(num == 1) return 1;
    if(num == 2) return 1;
    let num1 = 1;
    let num2 = 1;
    let sum = 0;
    let i = 2;
    while(i < num){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
