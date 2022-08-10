function solution(matrix) {
    let answer = 0;
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (i == 0){
                answer += matrix[i][j];
            } else {
                if (i == 2 && (matrix[i-2][j] != 0 && matrix[i-1][j] != 0)){
                    answer += matrix[i][j];
                } else if (i == 1 && matrix[i-1][j] != 0){
                    answer += matrix[i][j];
                }
            } 
        }
    }
    
    return answer;
}
