class Animal{
    constructor(name){
        this.name = name;
        this.tail = true;
        //console.log('inside constructor');
    }
    sayName(){
        console.log('name is ', this.name);
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }
    isTailAvailable(){
        console.log(this.tail);
    }
}
let dg = new Dog('Bruno');
dg.isTailAvailable();
dg.sayName();
// let anm = new Animal('Bruno');
// anm.sayName();
// let anm1 = new Animal('Dog');
// //console.log(anm1);
// anm1.sayName();