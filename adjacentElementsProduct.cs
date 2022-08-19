int solution(int[] inputArray) {
    int largestProduct = int.MinValue;
    
    for (int i = 0; i < inputArray.Length - 1; i++)
    {
        int workingProduct = inputArray[i] * inputArray[i + 1];
        if (workingProduct > largestProduct)
        {
            largestProduct = workingProduct;
        }
    }
    
    return largestProduct;
}
