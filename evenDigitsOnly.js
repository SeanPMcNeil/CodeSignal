function solution(n) {
    let s = n.toString();
    let answer = true;
    for (let i = 0; i < s.length; i++){
        if (parseFloat(s[i]) % 2 != 0){
            answer = false;
        }
    }
    
    return answer;
}
