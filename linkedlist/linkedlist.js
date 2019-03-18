/**
 * @description 单链表的插入， 删除， 查找
 */
var Node = function(element){
    this.element = element
    this.next = null
}
var LinkedList = function(){
    this.head = new Node('head')
}
LinkedList.prototype = {
    constructor: LinkedList,
    findByValue: function(item){
        var currentNode = this.head
        while(currentNode !== null && currentNode.element !== item){
            currentNode = currentNode.next
        }
        return currentNode === null ? -1 : currentNode
    },
    finByIndex: function(index){
        var currentNode = this.head
        var pos = 0
        while(currentNode !== null && pos !== index){
            currentNode = currentNode.next
            pos++
        }
        return currentNode === null ? -1 : currentNode
    },
    insert: function(insertedElement, element){
        var currentNode = this.findByValue(insertedElement)
        if(currentNode === -1){
            return false
        }
        var newNode = new Node(element)
        newNode.next = currentNode.next
        currentNode.next = newNode
        return true
    },
    findPrev: function(element){
        var currentNode = this.head
        while(currentNode.next !== null && currentNode.next.element !== element){
            currentNode = currentNode.next
        }
        if(currentNode.next === null){
            return -1
        }
        return currentNode
    },
    reverseList: function(){
        var currentNode = this.head.next
        var previousNode = null
        while(currentNode !== null){
            var nextNode = currentNode.next
            currentNode.next = previousNode
            previousNode = currentNode
            currentNode = nextNode
        }
        this.head.next = previousNode
    },
    remove: function(element){
        var currentNode = findByValue(element)
        var prevNode = findPrev(element)
        if(currentNode === -1){
            return false
        }
        prevNode.next = currentNode.next
    }
}
