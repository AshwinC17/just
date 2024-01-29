//const add = (a,b) => a + b;
//const addOne = a => a + 1;
//const addRandom = () => 1 + 2;

//console.log(add(1,2));
//console.log(addOne(1));

// const product = (a,b) => {
//     return a * b;
// }

// console.log(product(2,3));

// const student = {
//     name: 'Andrew',
//     age: 16,
//     class: 12,
// };

// console.log(student.class);

const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
console.log(fruits.map(fruit => fruit === ' '  ? 'empty string' : fruit));

const coppiedFruits = [...fruits];
console.log(coppiedFruits);

// const toArray = (arg1, arg2, arg3) => [arg1, arg2, arg3];
// console.log(toArray(1,2,3));

const toArray = (...args) => args;
console.log(toArray(1,2,3));