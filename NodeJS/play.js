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

// const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// console.log(fruits.map(fruit => fruit === ' '  ? 'empty string' : fruit));

// const coppiedFruits = [...fruits];
// console.log(coppiedFruits);

// const toArray = (arg1, arg2, arg3) => [arg1, arg2, arg3];
// console.log(toArray(1,2,3));

// const toArray = (...args) => args;
// console.log(toArray(1,2,3));

// const person = {
//     name: 'Abc',
//     age: 20,
//     country: 'India'
// };

// const printName = ({name}) => console.log(name);
// printName(person);

// const {name, age} = person;
// console.log(name, age);

// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done!');
//         }, 1500);
//     });
//     return promise;
// };

// setTimeout(() => {
//     console.log('2 seconds passed');
//     fetchData()
//         .then(text => {
//         console.log(text);  
//         return fetchData();
//     });
// }, 2000);

// console.log('hi');
// console.log('hello');

function delayPrint(msg, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, delay);
    });
}

async function printAll() {
    await delayPrint('a', 0);
    await delayPrint('b', 0);
    await delayPrint('c', 3000);
    await delayPrint('d', 0);
    await delayPrint('e', 0);
}

printAll();