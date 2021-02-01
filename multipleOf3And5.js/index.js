// Function that return sum of all multiples of 3 and 5 under a certain k number

function multiples(k) {
    let sum = 0;

    // loop trhough all number to k
    for (let i = 0; i < k; i++) {

        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(multiples(23));