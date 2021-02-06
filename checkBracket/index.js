function checkBracket(expr){
    let stack = []
    let conversion = {
        "(": ")", 
        "[": "]", 
        "{": "}", 
    }
    let current;
    for (let i = 0; i < expr.length; i++){
        current = expr[i]
        // add in stack bracket value
        if (current === '(' || current === '[' || current === "{") {
            stack.push(current)
        }
        // if closure bracket, pop last value of stack and check if value popped is the good value
        else if (current === ')' || current === ']' || current === "}"){
            var lastChar = stack.pop()
            if (conversion[lastChar] != current){
                return false
            }
        }
    }

    // if there is still element in stack array, then expression is not correctly closed
    return stack.length === 0
}

console.log(checkBracket('(3+{1-1)}')); // false
console.log(checkBracket('{[(3+1)+2]+}')); //true
console.log(checkBracket('[1+1]+(2*2)-{3/3}')); //true
console.log(checkBracket('(({[(((1)-2)+3)-3]/3}-3)')); //false