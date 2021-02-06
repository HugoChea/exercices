function PatternChaser(str) {
    var patterns = [];
    // i = minimal number of char for a pattern
    // j = maximum number of char for a pattern (reproduced another time, so a pattern is at most, string length / 2)
    var i = 2; j = Math.floor(str.length / 2);
    
    // search biggest pattern possible of j length
    while (j >= i && patterns.length == 0) {
        FindPattern(j--);
    }

    function FindPattern(num) {
        // For every i+num characters < str.length
        for (var i = 0; i < str.length - num; i++) {
            // test pattern of num characters from i
            var pattern = str.slice(i, i + num);
            // get last occurence of pattern in string
            var index = str.lastIndexOf(pattern);
            // if last occurence is found and last occurence is not the same sequence, push pattern to array and stop loop
            if (index != -1 && index != i) {
                patterns.push(pattern);
                break;
            }
        }
    }

    if (patterns.length != 0){
        var largestPattern = patterns[0]
    }
    if (largestPattern)
        return 'yes ' + largestPattern;
    else
        return 'no null';
}

console.log(PatternChaser("aabejiabkfabed")) //"yes abe"
console.log(PatternChaser("123224"))    // "no null"