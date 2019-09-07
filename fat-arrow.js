//truthy falsy
function sayHello(prop1){
    return 'property passed is ' + prop1;
}

const sayHelloFatArrow = prop1 => {
    console.log('something');
    return 'property passed is ' + prop1;
};

var sayHelloFatArrow1 = prop1 => 'property passed is ' + prop1;

let result = sayHelloFatArrow(1, 2, 3, 4, 5);
console.log(result);
sayHello();
sayHello(undefined);
sayHello(1);
sayHello(0);
sayHello(false);

