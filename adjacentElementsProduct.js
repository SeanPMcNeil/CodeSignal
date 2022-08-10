function solution(inputArray) {
    let largest = -Number.MAX_VALUE;
    
    for (let i = 0; i < inputArray.length - 1; i++){
        let product = inputArray[i] * inputArray[i+1];
        
        if (product > largest){
            largest = product;
        }
    }
    
    return largest;
}
