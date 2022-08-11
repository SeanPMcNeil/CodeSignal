function solution(arr) {
    let longest = 1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    let answer = [];
    for (let j = 0; j < arr.length; j++){
        if (arr[j].length == longest){
            answer.push(arr[j]);
        }
    }
    
    return answer;
}