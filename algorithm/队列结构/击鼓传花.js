function Queue() {
    this.items = []
}

Queue.prototype.enqueue = function (ele) {
    this.items.push(ele)
}

Queue.prototype.dequeue = function () {
    return this.items.shift()
}

Queue.prototype.front = function () {
    return this.items[0]
}

Queue.prototype.isEmpty = function () {
    return this.items.length == 0
}

Queue.prototype.size = function () {
    return this.items.length
}

Queue.prototype.toString = function () {
    return this.items.join(' ')
}

var queue = new Queue()
arr = ['a','b','c','d','e','f']
num = 5
function getlast(arr,num){
    arr.forEach(v=>{
        queue.enqueue(v)
    })
    while(queue.size() != 1){
        let count = 1;
        while(count++ != num){
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
        console.log(queue.toString());
        
    }
    return queue.front()
}

console.log(getlast(arr,5));