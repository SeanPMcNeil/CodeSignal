// Incomplete Answer so far

function solution(s) {
    let map = {};
    
    for (let i = 0; i < s.length; i++){
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    
    let answer = "";
    
    for (var l in map){
        if (map[l] == 1) {
            answer += l
        } else {
            answer += map[l] + l
        }
    }
    
    return answer;
}
