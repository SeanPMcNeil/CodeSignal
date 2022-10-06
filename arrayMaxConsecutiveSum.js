function solution(inputArray, k) {
    let max = 0;
    let answer = [];
    
    for (let i = 0; i <= inputArray.length - k; i++){
        let workingSum = 0;
        
        for (let j = 0; j < k; j++){
            workingSum += inputArray[i+j];
        }
        
        if (workingSum > max){
            max = workingSum;
        }
    }
    
    return max;
}
