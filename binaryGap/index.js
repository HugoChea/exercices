function solution(N) {
    // change a number to binary
    var binaryNumber = Number(N).toString(2).split("")
    var maxGap = 0
    for (let i=0; i<binaryNumber.length; i++){
        if (binaryNumber[i] == "1"){
            var j = i+1
            var gap = 0
            while (j< binaryNumber.length && binaryNumber[j] == "0"){
                gap++
                j++
            }
            if (j< binaryNumber.length && binaryNumber[j] == "1" && gap > maxGap){
                maxGap = gap
            }
        }
    }

    return maxGap

}