function solution(inputString) {
    let i = 0;
    let j = inputString.length - 1;
    
    while (i <= j){
        if (inputString[i] == inputString[j]){
            i++;
            j--;
            continue;
        } else {
            return false;
        }
    }
    
    return true;
}
