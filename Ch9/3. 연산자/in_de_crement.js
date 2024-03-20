let increment = 10;

increment++;

let decrement = 10;

decrement--;

console.log(increment); // 11
console.log(decrement); // 9

// 전치연산, 후치연산
console.log("전치연산 test : ");
console.log(++increment); // 12

console.log("후치연산 test : ");
console.log(increment--); // 12
console.log(increment); // 11
