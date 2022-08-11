function solution(s1, s2) {
    let map1 = {};
    let map2 = {};
    
    for (let i = 0; i < s1.length || i < s2.length; i++){
        if (i < s1.length){
            if (!map1[s1[i]]){
                map1[s1[i]] = 1;
            } else {
                map1[s1[i]]++;
            }
        }
        if (i < s2.length){
            if (!map2[s2[i]]){
                map2[s2[i]] = 1;
            } else {
                map2[s2[i]]++;
            }
        }
    }
    let answer = 0;

    for (var char in map1){
        if (map2[char]){
            if (map1[char] < map2[char]){
                answer += map1[char];
            } else {
                answer += map2[char];
            }
        }
    }
    
    return answer;
}
