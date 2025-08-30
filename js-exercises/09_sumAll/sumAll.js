const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    if((firstNum<0 || lastNum<0) 
        || typeof(firstNum)!='number'
        || typeof(lastNum)!='number'
        || !Number.isInteger(firstNum)
        || !Number.isInteger(lastNum)
    ) return "ERROR";
    if(firstNum>lastNum){
        firstNum += lastNum;
        lastNum = firstNum - lastNum;
        firstNum -= lastNum;
    }

    for(let i=firstNum; i<=lastNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
