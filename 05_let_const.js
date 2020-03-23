// Let
//
// let a = 'Variable a';
// let b = 'Variable b';
// {
//     a = 'New Variable A';
//     let b = 'Locale Variable B';
//     console.log('Scope A', a);
//     console.log('Scope B', b);
// }
//
//
// console.log('A', a); // New Variable A
// console.log('B', b); // Variable B

// Const

const PORT = 8080;

const array = ['JavaScript', 'is', 'Awesome'];
array.push('!');
array[0] = 'JS';
console.log(array);

const obj = {};
obj.name = 'Vito';
obj.age = 23;
console.log(obj);

delete obj.name;
console.log(obj);


