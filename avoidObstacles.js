function solution(a) {
    for(var n=1;;n++) {
        if(a.every(x=>x%n)) {
            return n
        }
    }
}