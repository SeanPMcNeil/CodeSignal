object solution(string[] inputArray) {
    int len = inputArray.Max(_ => _.Length);
    return inputArray.Where(_ => _.Length == len);
}
