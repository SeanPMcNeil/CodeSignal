function solution(a) {
    let answer = [];
    
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < a.length; i++){
        if (i % 2 == 0){
            sum1 += a[i];
        } else {
            sum2 += a[i]
        }
    }
    
    answer.push(sum1, sum2);
    return answer;
}
