const abc = {
    p: 'abcdef',
    q: 'bcdd',
    prop1: true,
    sayHello: function(){
        console.log('hello');
    },
    inner: {
        a: 'abdasf'
    }
};

abc.newProp = 'adfasdf';

//console.log(abc.prop1);
// console.log(abc['prop1']);
// abc.sayHello();
//console.log(abc.inner.a);
console.log(abc);

