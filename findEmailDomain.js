function solution(address) {
    let parts = address.split('@');
    return parts[parts.length-1];
}
