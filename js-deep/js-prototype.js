var a = new Array()
a.prototype = Object.create(Array().prototype)

for(i of a){
    console.log(i);
    
}
console.log(a.prototype);
