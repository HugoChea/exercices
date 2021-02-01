function existPair(array, goal) {
    var arraySize = array.length;
    var indexMin = 0;
    var indexMax = arraySize - 1;

    if (goal >= (2 * array[indexMax])) // Si goal beaucoup trop grand
        return 0;
    while (indexMin < indexMax) {
        if (array[indexMin] + array[indexMax] == goal) // Si addition exact, solution trouvé
            return 1;
        else if (array[indexMin] + array[indexMax] < goal) // Si addition inférieur au résultat, on augmente la valeur minimal du pair
            indexMin++;
        else // si addtion supérieur, on réduit la valeur maximal du pair
            indexMax--;
    }
    return 0;
}

var input = [1, 1, 2, 3, 5, 6, 12, 13, 15, 15, 16, 18, 20, 27, 29];
var goal = 8;

var array = input.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b); // remove duplicate element and sort

console.log(array)
if (existPair(array, goal))
    console.log("Il existe une combinaison");
else
    console.log("Il n\existe pas de combinaison");
