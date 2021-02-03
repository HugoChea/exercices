function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var uniqueArray = [...new Set(A.filter(i => i > 0))].sort((a, b) => a - b);
    var arraySize = uniqueArray.length
    for (let i =1; i <= arraySize; i++){
        if (uniqueArray[i-1]!= i){
            return i
        }
    }
    return arraySize +1
}