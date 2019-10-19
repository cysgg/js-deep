(function(){
    var name = 'haha'
    Person = function(value){
        name =value
    }

    Person.prototype.getName = function(){
        return name
    }

    Person.prototype.setName = function(value){
        name = value
    }
    AnoPerson = function(){
        
    }
    AnoPerson.prototype.getName = function(){
        return name
    }

})();

// console.log(name);

console.log(new AnoPerson().getName());
var p1 = new Person('Nicholas')
console.log(p1.getName());
p1.setName('Greg')
console.log(p1.getName());

var p2 = new Person('Nicholas')
console.log(p1.getName());
console.log(p2.getName());
// console.log(name);


