function* multiplication(x){

    for(var i = x; i <= x; i++){
        x = x * 2;
        yield x;
    }
     
    myArr.push(x);
    return x;
}

let myArr = [];

let num = multiplication(3);

console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);

module.exports = multiplication;