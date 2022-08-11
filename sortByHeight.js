function solution(a) {

    let tempA = a.filter(n => n > 0).sort((a,b) => b-a);
    
    for (let i = 0; i < a.length; i++){
        if (a[i] != -1){
            a[i] = tempA.pop();
        }
    }

    return a;
}
