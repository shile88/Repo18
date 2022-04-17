function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments;
}

let generatorArray = [];
let iterator = myGenerator(6, 7, 8);

for(let i = 0; i < 13; i++) {
    generatorArray.push(iterator.next().value);
}

console.log(generatorArray);

module.exports = {generatorArray, myGenerator};