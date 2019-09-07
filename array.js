//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let arr = [1,4,6,7, 20, 13, 12, 25]; // >15

//filter
let result = arr.filter(prop1 => prop1 > 15);  //returns array

//map
let result1 = arr.map(val => val + 'asdf');  // returns array

arr.forEach(value => {
    //console.log('value is ', value);
});

const finalResult = arr
                        .filter(val => val < 10)
                        .map(val => 'value is ' + val)
                        .forEach(val => console.log(val));
                        
