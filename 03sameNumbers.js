function sameNumbers(num) {
    let numStr = num.toString();
    let sum = 0;
    let firstChar = numStr[0];
    let isSame = true;
    for (let i = 0; i < numStr.length; i++) {
        if (firstChar !== numStr[i]) {
            isSame = false;
        }
        sum += Number(numStr[i]);
        
    } 

    console.log(isSame);
    console.log(sum);

}

sameNumbers(2222222)
sameNumbers(1234)