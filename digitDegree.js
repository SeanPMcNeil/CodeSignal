function solution(n) {
    let nString = n.toString();
    if (nString.length <= 1) {
        return 0;
    } else {
        let nArray = nString.split('');
        console.log(nArray);
        return summing(nArray);
    }
}

function summing(arr) {
    let workingSum = 0;
    for (let i = 0; i < arr.length; i++) {
        workingSum += parseInt(arr[i]);
    }
    if (workingSum < 10) {
        return 1;
    } else {
        return 1 + solution(workingSum);
    }
}