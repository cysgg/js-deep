// function foo(a,b) {
//     console.log(a+b);
    
// }

// foo.call(null,'海洋','饼干')
// foo.apply(null,['海洋','饼干'])
// var fun = foo.bind(null);
// fun('海洋','饼干');

// [].slice.call(arr,1,4)

var fun;
var obj = {
    a : 1,
    foo : function(){
        fun = function(){
            console.log(this.a);
        }.bind(this)
    }
}

// obj.foo();
// fun();
var obj1 = {
    a : 2,
    foo1 : function(){
        fun = function(){
            console.log(this.a);
        }.bind(this)
    }
}
// obj.foo.call(obj1)
// fun();
obj1.foo1.apply(obj)
// obj1.foo1()
fun();