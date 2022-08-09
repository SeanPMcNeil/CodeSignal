function solution(name) {
    let regex = /^[a-zA-Z0-9_]+$/;
    
    if (!isNaN(name[0])){
        return false;
    } else if (!regex.test(name)){
        return false;
    }
    
    return true;
    
}