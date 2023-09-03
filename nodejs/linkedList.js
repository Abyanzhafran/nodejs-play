class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // insert first node
  inserFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  // insert last node
  insertLast(data) {
    let node = new Node(data)
    let curr

    // if empty, make head
    if (!this.head) {
      this.head = node
    } else {
      curr = this.head

      while (curr.next) {
        curr = curr.next
      }

      curr.next = node
    }

    this.size++
  }

  // insert at index
  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return
    }

    // if first index 
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const node = new Node(data)
    let curr, prev

    // set current to first 
    curr = this.head
    let count = 0

    while (count < index) {
      prev = curr // Node before index
      count++
      curr = curr.next // Node after index
    }

    node.next = curr
    prev.next = node

    this.size++
  }

  // get at index
  getAt(index) {
    let curr = this.head
    let count = 0

    while (curr) {
      if (count == index) {
        console.log(curr.data)
      }
      count++
      curr = curr.next
    }

    return null
  }

  // remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return
    }

    let curr = this.head
    let prev
    let count = 0

    // remove first
    if (index === 0) {
      this.head = curr.next
    } else {
      while (count < index) {
        count++
        prev = curr
        curr = curr.next
      }

      prev.next = curr.next
    }

    this.size--
  }

  // clear list

  // print list data
  printListData() {
    let curr = this.head

    while (curr) {
      console.log(curr.data)
      curr = curr.next
    }
  }
}

const ll = new LinkedList()
ll.inserFirst(100)
ll.inserFirst(200)
ll.inserFirst(300)

ll.insertAt(500, 0)

ll.insertLast(400)

ll.removeAt(0)
ll.printListData()
// ll.getAt(0)