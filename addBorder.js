function solution(picture) {
    let answer = [];
    let length = picture[0].length + 2;
    let height = picture.length + 2;
    console.log(length, height)
    
    for (let i = 0; i < height; i++){
        if (i == 0 || i == height - 1){
            let string = "";
            for (let j = 0; j < length; j++){
                string += "*";
            }
            answer.push(string);
        } else {
            answer.push("*" + picture[i-1] + "*");
        }
    }
    
    return answer;
}
