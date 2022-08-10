function solution(statues) {
    statues.sort((a,b) => a - b)
    let answer = 0;
    for (let i = 0; i < statues.length - 1; i++){
        if (statues[i] + 1 != statues[i+1]){
            answer += (statues[i+1] - statues[i]) - 1;
        }
    }
    
    return answer;
}
