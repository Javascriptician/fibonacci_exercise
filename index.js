function fibonacciGenerator(n) {
    let output = [0, 1];

    if(n == 1) {
        return [0];
    } else if (n == 2) {
        return output;
    } else {
        while(output.length < n) {
            let lastTwoElements = output[output.length - 1] + output[output.length - 2];
            output.push(lastTwoElements);
        }
    }

    return output;
    
}

let result = fibonacciGenerator(13);
console.log(result);
