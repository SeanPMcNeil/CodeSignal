function solution(a, b) {
    let length = a.length,
        differences = [];
        
    for (let i = 0; i < length; i++){
        if (a[i] != b[i]){
            differences.push(i)
        }
    }
    
    if (differences.length == 0){
        return true;
    } else if (differences.length == 2){
        if (a[differences[0]] == b[differences[1]] && a[differences[1]] == b[differences[0]]){
            return true;
        }
    }
    
    return false;
}
