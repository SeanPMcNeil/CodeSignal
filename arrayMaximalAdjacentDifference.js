function solution(inputArray) {
    let maxDiff = 0;
    
    for (let i = 1; i < inputArray.length - 1; i++){
        let diff1 = Math.abs(inputArray[i - 1] - inputArray[i]);
        let diff2 = Math.abs(inputArray[i] - inputArray[i + 1]);
        
        if (diff1 > maxDiff){
            maxDiff = diff1;
        }
        if (diff2 > maxDiff){
            maxDiff = diff2;
        }
    }
    
    return maxDiff;
}
