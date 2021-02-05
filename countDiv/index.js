// naive solution

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var count = 0
    for (let i = A; i <= B; i++){
        if (i%K ==0){
            count++
        }
    }
    return count
}

// optimized solution (O(1))

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var b = parseInt(B/K)   // From 0 to B the integers divisible by K
    var a = parseInt(A/K)   // From 0 to A the integers divisible by K

    if (A % K === 0){       // "A" is inclusive; if divisible by K then
        a--                 //   remove 1 from "a"
    }

    return b-a
}

// example : 
test(6, 11, 2);
// 3

b = parseInt(11/2) // 5 => (2, 4, 6, 8, 10)
a = parseInt(6/2)  // 3 => (2, 4, 6)