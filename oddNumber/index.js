
function solution(A) {
    var arrayLength = A.length
    // create tmp object as stack
    var tmp = {}
    // loop through array
    for (let i =0; i< arrayLength; i++){
        // if tmp stack has A[i] as attribute, increment by one
        if (tmp.hasOwnProperty(A[i])){
            tmp[A[i]]++
        }
        // if tmp doesn't have A[i] attribute, create one
        else{
            tmp[A[i]] = 1
        }
    }
    // return number of the array that doesn't have a pair
    for (let index in tmp){
        if (tmp[index]%2 != 0){
            return parseInt(index)
        }
    }

}

test = [1,2,3,1,3]
console.log(solution(test))
