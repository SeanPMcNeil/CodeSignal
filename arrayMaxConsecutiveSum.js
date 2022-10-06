// function solution(inputArray, k) {
//     let max = 0;
//     let answer = [];
    
//     for (let i = 0; i <= inputArray.length - k; i++){
//         let workingSum = 0;
        
//         for (let j = 0; j < k; j++){
//             workingSum += inputArray[i+j];
//         }
        
//         if (workingSum > max){
//             max = workingSum;
//         }
//     }
    
//     return max;
// }


// Max Consecutive Sum - 2 Elements Only

function solution(inputArray) {
    if (inputArray.length < 2) {
        return "There is not a consecutive sum to find";
    }
    
    let answer = [0, 1];
    let max = inputArray[0] + inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        workingSum = inputArray[i] + inputArray[i+1];

        if (max < workingSum) {
            max = workingSum;
            answer = [i, i+1];
        }
    }

    return answer;
}