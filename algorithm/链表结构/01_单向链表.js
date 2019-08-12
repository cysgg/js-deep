function LinkedList(){
    this.head = null
    this.foot = null
    this.length = 0  
}
function Node(data,next){
    this.data = data
    this.next = null
}

LinkedList.prototype.append = function(data){
    if(this.length == 0){
        var newNode = new Node(data)
        this.head = newNode
        this.foot = newNode
    }else{
        var newNode = new Node(data)
        this.foot.next = newNode
        this.foot = this.foot.next
    }
    this.length++
}

LinkedList.prototype.toString = function(){
    let current = this.head
    let listString = ''
    while(current){
        listString += current.data + ' '
        current = current.next
    }
    return listString
}

LinkedList.prototype.insert = function(position,data){
    if(position < 0 || position > this.length){
        return false
    }
    let newNode = new Node(data)
    if(position == this.length){
        this.foot.next = newNode
        this.foot = this.foot.next
    }
    else if(position == 0){
        newNode.next = this.head
        this.head = newNode
    }else{
        let current = this.head
        let i = 0
        while(++i < position){
            current = current.next
        }
        
        newNode.next = current.next
        current.next = newNode
    }
    
    this.length ++
    return true
}


LinkedList.prototype.get = function(position){
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

var list = new LinkedList()
list.append('a')
list.append('b')
list.append('c')
list.append('d')

console.log(list.insert(0,'e'));

console.log(list.toString());
console.log(list.get(2));
