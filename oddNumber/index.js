
function solution(A) {
    var arrayLength = A.length
    
    var tmp = {}

    for (let i =0; i< arrayLength; i++){
        if (tmp.hasOwnProperty(A[i])){
            tmp[A[i]]++
        }
        else{
            tmp[A[i]] = 1
        }
    }

    for (let index in tmp){
        if (tmp[index]%2 != 0){
            return parseInt(index)
        }
    }

}
