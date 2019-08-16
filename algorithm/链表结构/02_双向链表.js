function DoublyLinkedList(){
    this.head = null
    this.foot = null
    this.length = 0  
}
function Node(data,next){
    this.prev = null
    this.data = data
    this.next = null
}

DoublyLinkedList.prototype.append = function(data){
    if(this.length == 0){
        var newNode = new Node(data)
        this.head = newNode
        this.foot = newNode
    }else{
        var newNode = new Node(data)
        newNode.prev = this.foot
        this.foot.next = newNode
        this.foot = this.foot.next
    }
    this.length++
}

DoublyLinkedList.prototype.toString = function(){
    let current = this.head
    let listString = ''
    while(current){
        listString += current.data + ' '
        current = current.next
    }
    return listString
}

DoublyLinkedList.prototype.insert = function(position,data){
    if(position < 0 || position > this.length){
        return false
    }
    let newNode = new Node(data)
    if(position == this.length){
        this.append(data)
    }
    else if(position == 0){
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }else{
        let current = this.head
        let i = 0
        while(++i < position){
            current = current.next
        }
        newNode.prev = current
        newNode.next = current.next
        current.next.prev = newNode
        current.next = newNode
    }
    
    this.length ++
    return true
}


DoublyLinkedList.prototype.get = function(position){
    if(position < 0 || position >= this.length){
        return ''
    }
    let cur = this.head
    let i = 0
    while(i++ < position){
        cur = cur.next
    }
    return cur.data
}

DoublyLinkedList.prototype.indexOf = function(data){
    
    let i = 0
    let cur = this.head
    while(cur){
        if(data == cur.data){
            return i
        }
        i++
        cur = cur.next
    }
    return -1
}

DoublyLinkedList.prototype.updata = function(position,data){
    
    if(position < 0 || position >= this.length){
        return -1
    }
    let cur = this.head
    let i = 0
    while(i++ < position){
        cur = cur.next
    }
    return cur.data = data
}

DoublyLinkedList.prototype.removeAt = function(position){
    
    if(position < 0 || position >= this.length){
        return null
    }
    var data = 0;
    if(position == 0){
        data = this.head.data
        this.head = this.head.next
        this.head.prev = null;
    }else if(position == this.length-1){
        data = this.foot.data
        this.foot = this.foot.prev
        this.foot.next = null
    }
    else{
        var cur = this.head
        
        let i = 0
        while(++i < position){
            cur = cur.next
        }
        data = cur.next.data
        cur.next.next.prev = cur
        cur.next = cur.next.next
    }
    this.length--
    return data
}

DoublyLinkedList.prototype.remove = function(data){
    
    let position =this.indexOf(data)
    return this.removeAt(position)
}

DoublyLinkedList.prototype.isEmpty = function(data){
    return this.length == 0
}
DoublyLinkedList.prototype.size = function(data){
    return this.length
}

var list = new DoublyLinkedList()
list.append('a')
list.append('b')
list.append('c')
list.append('d')

console.log(list.insert(0,'e'));

console.log(list.toString());
console.log(list.get(2));
console.log(list.indexOf('e'));
console.log(list.updata(5,'f'));
console.log(list.removeAt(4));

console.log(list.toString());

