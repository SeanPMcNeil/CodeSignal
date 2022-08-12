function solution(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++){
        while (arr[i] <= arr[i-1]){
            arr[i] += 1;
            count++;
        }
    }
    
    return count;
}
