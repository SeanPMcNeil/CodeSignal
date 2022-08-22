function solution(inputString) {
    let i = 0;
    let answer = "";
    
    while (!isNaN(inputString[i]) && inputString[i] != " "){
        answer += inputString[i];
        i++;
    }
    
    return answer;
}
