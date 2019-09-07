const obj = {
    a: 10,
    b: 20,
    def: 'abc',
    inner: {
        item: 'my item'
    }
};
// const a = obj.a;
// const b = obj.b;
const { a, b, c, inner: { item } } = obj;

console.log(a);
console.log(b);
console.log(item);
