function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();

    return 'undefined!';
}

function* insideGenerator1() {
    for(let i = 1; i <= 5; i++ ){
        let x = i;
        yield x;
    }
}

function* insideGenerator2() {
    for(let i = 10; i <= 15; i++ ){
        let x = i;
        yield x;
    }
    
}

function* insideGenerator3() {
    for(let i = 6; i <= 9; i++ ){
        let x = i;
        yield x;
    }
    
}

let fifteenArray = [];
let iterator = myGenerator();

for(let i = 0; i <= 15; i++) {
    let next = iterator.next().value;
    if(next !== 'undefined!') {
        next = next + '#'; 
    }

    fifteenArray.push(next); 
    
}

console.log(fifteenArray);

module.exports = {fifteenArray, myGenerator};
