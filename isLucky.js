function solution(n) {
    let s = n.toString();
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < s.length; i++){
        if (i < Math.floor(s.length / 2)){
            sum1 += parseInt(s[i]);
        } else {
            sum2 += parseInt(s[i]);
        }
    }
    
    if (sum1 == sum2){
        return true;
    } else {
        return false;
    }
}
