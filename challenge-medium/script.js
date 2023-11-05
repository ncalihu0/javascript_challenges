function sharePizza(slices, person) {
    let ans = slices / person;
    let output = ans.toFixed(2);
    return `Each person gets ${output} slices of pizza; from our ${slices} slice pizza`
}

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));