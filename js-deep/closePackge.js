var n = function(c){
    return function(d){
        return d(c)
    }
}
a = n(3)

function b(e){
    return function(f){
        console.log(f,e);
    }
}

a(b(2));
