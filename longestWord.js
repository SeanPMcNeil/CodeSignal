// Fails on one hidden test case -_-
function solution(text) {
    let words = text.match(/\b(\w+)\b/g);
    let longest = words[0];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    
    return longest;
}
