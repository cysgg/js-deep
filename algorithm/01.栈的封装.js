//栈的封装
function Stack(){
    this.items = []
}

Stack.prototype.push = function(ele){
    this.items.push(ele)
}
Stack.prototype.pop = function(){
    return this.items.pop()
}
Stack.prototype.peek = function(ele){
    return this.items[this.items.length-1]
}
Stack.prototype.isEmpty = function(ele){
    return this.items.length === 0
}

Stack.prototype.size = function(ele){
    return this.items.length
}
Stack.prototype.toString = function(ele){
    return this.items.join(' ')
}

function des2bin(decNumber){ // 十进制转二进制
    var stack = new Stack()
    while(decNumber > 0){
        stack.push(decNumber % 2)
        decNumber = Math.floor(decNumber / 2)

    }
    var binString = ''
    while(!stack.isEmpty()){
        binString += stack.pop()
    }
    return binString
}

var s = new Stack()
s.push(20)
s.push(123)
s.push(87)
s.push(61)
console.log(s);
s.pop()
s.pop()
console.log(s);
console.log(s.peek())
console.log(s.isEmpty());
console.log(s.size());
console.log(s.toString());

console.log(des2bin(100000000045614169500000));




