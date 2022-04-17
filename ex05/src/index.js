let shoppingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 1],
    ['Carrot', 22],
    ['Apple', 7],
]);

let arrKey = [];
let arrValue = [];

for(let element of shoppingList.keys()) {
    arrKey.push(element);
    console.log(`groceries: ${element}`);
}

for(let element of shoppingList.values()) {
    arrValue.push(element);
    console.log(`amount: ${element}`);
}

for(let element of shoppingList.entries()) {
    console.log(element);
}

module.exports = { shoppingList, arrKey, arrValue };