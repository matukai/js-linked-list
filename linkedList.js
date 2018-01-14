/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {

  let head = null
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    let objNode = {
      value: value,
      next: null
    };
    if (head === null) {
      head = objNode;
      tail = objNode;
      return objNode;
    } else {
      tail.next = objNode;
      tail = objNode;
      return objNode;
    }
  }

  function remove(number) {
    //alternate version
    //previouse node = get(number - 1)
    //next node = get(number + 1)


    let temp = head;
    let prev;
    let i = 0;

    while (temp !== null) {
      if (number === 0 && temp.next) {
        head = temp.next;
        return head;
      } else if (number === 0) {
        head = null;
        //return head;
      } else if (i === number && temp.next === null) {
        prev.next = null;
        tail = prev;
        //return prev;
      } else if (i === number) {
        prev.next = temp.next;
        //return prev;
      }
      i++
      prev = temp;
      temp = temp.next;
    }
    return false;
  }

  // Find the node you are searching for and keep track of previous node
  // When found, update previous node's next to point to the next node referenced by node to be deleted
  // Delete found node from memory

  function get(number) {
    let current = head;
    let n = 0;
    let prev;
    while (current != null) {
      if (n === number) {
        return current;
      }
      n++;
      current = current.next;
    }
    return false;
  }

  function insert(val, number) {
    let temp = head;
    let prev = get(number - 1);
    let index = get(number);

    let obj = {
      value: val,
      next: null
    };

    if (number === 0) {
      obj.next = head;
      head = obj;
    } else if (index < 0 || get(number) === false) {
      return false;
    } else {
      obj.next = index;
      prev.next = obj;
    }
  }

  // Find the position/node in your linked list where you want to insert your new node after
  // Update the next property of the new node to point to the node that the target node currently points to
  // Update the next property of the node you want to insert after to point to the new node



  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  }
}