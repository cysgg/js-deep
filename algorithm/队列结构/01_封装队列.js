function Queue() {
    this.items = []
}

Queue.prototype.enqueue = function (ele) {
    this.items.unshift(ele)
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
// queue.enqueue('abc')
// queue.enqueue('cba')
// queue.enqueue('nba')
// queue.enqueue('mba')
// console.log(queue);
