let arr = ['abc', 'def'];
let arr1 = ['aaa', 'bbbb'];

let res = [...arr, ...arr1];
arr.join(arr1);
//console.log(res);


let res1 = [...arr.slice(0,1), 'b', ...arr.slice(1,arr.length)];
// console.log(res1);
// console.log(arr);

//Pass by Reference
//Pass by value



let obj = {
    abc: 'hello'
};

let obj2 = obj;

let obj1 = {
    def: 'abc'
};

let resultObj = {
    ...obj,
    ...obj1,
    abc: 'another'
};

console.log(resultObj);