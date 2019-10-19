var myObject = {};

Object.defineProperty(myObject,'a',{
    enumerable:true,value:2
})
Object.defineProperty(myObject,'b',{
    enumerable:false,value:3
})
console.log(myObject.b);

console.log(myObject.hasOwnProperty('b'));

console.log(('b' in myObject));

for(var k in myObject){
    console.log(k,myObject[k]);
    
}

var myarray = [1,2,3]
var it = myarray[Symbol.iterator]();
console.log(it.next());
    