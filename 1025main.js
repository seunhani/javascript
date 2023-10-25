const fruits = ['🍌', '🍎'];
console. log(fruits);
console. log(fruits. length);
console. log(fruits[0]);
console. log(fruits[1]);
console. log(fruits[2]);
console. log(fruitsfruits[fruits. length - 1]);

for (let i = 0; i < fruits, length; i++) {
    console. log(fruits[i]);
}

for(let fruits of fruits) {
    console. log(fruits);
}

fruits. push('🍓','🍑');
console. log(fruits);

fruits. pop();
fruits. pop();
console. log(fruits);

fruits.unshift('🍓','🍋');

fruits.push('🍓','🍑','🍋')
console. log(fruits);
fruits.splice(1,1);
console. log(fruits);
fruits.splice(1,1,'🍏','🍉');
console. log(fruits);

const fruits2 = ['🍐','🥥']
const newFruits = fruits.concat(fruits2);
console. log(newFruits);

console.clear();
console. log(fruits.indexOf('🍎'));
console. log(fruits.indexOf('🍉'));
console. log(fruits.indexOf('🥥'));

console. log(fruits.includes('🍉'));
console. log(fruits.includes('🥥'));

console.clear();
fruits.push('🍎');
console. log(fruits);
console. log(fruits.indexOf('🍎'));
console. log(fruits.lastIndexOf('🍎'));

{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console. log(result);
}

{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split();
    console. log(result);
}

{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console. log(result);
    console. log(arrary);
}






