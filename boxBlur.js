function solution(image) {
    let answer = []
    // Build 3x3 Box
    for (let i = 1; i < image.length - 1; i++) {
        let subAnswer = [];
        for (let j = 1; image[i].length - 1; j++) {
            let sum = 0;
            if (image[i+1][j] == undefined || image[i][j+1] == undefined){
                break;
            }
            // Do Calculations
            sum += (image[i-1][j-1] + image[i-1][j] + image[i-1][j+1]) + (image[i][j-1] + image[i][j] + image[i][j+1]) + (image[i+1][j-1] + image[i+1][j] + image[i+1][j+1]);
            subAnswer.push(Math.floor(sum / 9));
        }
        answer.push(subAnswer);
    }
    
    return answer;
}
