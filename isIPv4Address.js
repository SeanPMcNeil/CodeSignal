function solution(inputString) {
    let nums = inputString.split('.');

    if (nums.length != 4){
        return false;
    }
    
    for (let i = 0; i < nums.length; i++){
        if (parseInt(nums[i]) < 0 || parseInt(nums[i]) > 255 || nums[i] == '' || isNaN(nums[i])){
            return false;
        } else if (nums[i].length > 1 && nums[i][0] == "0"){
            return false;
        }
    }
    
    return true;
}
