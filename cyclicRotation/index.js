function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (K === A.length){
        return A
    }
    var array = A
    var tmp = []
    for (let loop=0; loop < K; loop++){
        for (let i=0; i < array.length; i++){
            if (i==0){
                tmp.push(array[array.length-1])
            }
            else{
                tmp.push(array[i-1])
            }
        }
        array = tmp
        tmp =[]
    } 
    return array    
}