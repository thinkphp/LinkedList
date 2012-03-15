Class: LinkedList {#LinkedList}
==============================

An Linked List implementation in MooTools.

### Syntax:

    var myList = new LinkedList();

### Arguments:

- Void

LinkedList Method: insertAtHead {#LinkedList: insertAtHead}
-----------------------------------------------------------

Inserts the specfied value to the beginning of this list.

### Syntax: myList.insertAtHead(val);

### Arguments:

- val `object` the specified value to append

### Returns:

- returns `True`

### Example: 


LinkedList Method: insertAtTail {#LinkedList: insertAtTail}
-----------------------------------------------------------

Appends to the end of this list.

### Syntax: myList.insertAtTail(val);

### Arguments:

- val `object` the specfied value to insert to the end of this list.

### Returns:

- returns `True`

### Example: 


LinkedList Method: remove {#LinkedList: remove}
-----------------------------------------------

Removes the element at the specified position in this list.

### Syntax: myList.remove(1);

### Arguments:

- index `Integer` an integer that must be in range [0,list.length-1]

### Returns:

- `object` returns the element's information deleted.

### Example: 


LinkedList Method: getLength {#LinkedList: getLength}
-----------------------------------------------------

Returns the number of elements in this list.

### Syntax:

    myList.getLength(); 

### Arguments:

`void`

### Returns:

`integer` returns the number of elements.

### Example: 


LinkedList Method: toArray {#LinkedList: toArray}
-------------------------------------------------

Display an array containing all the elements in this list in the correct order

### Syntax:

    myList.toArray();

### Arguments:

`void`

### Returns:

`Array` returns an array containing all the elements in this list in the correct order

### Example: 


LinkedList Method: search {#LinkedList: search}
-----------------------------------------------

Get the element's information at the specified position in this list.
If the specified index is out of range (index < 0 || index >= length()) return NULL.

### Syntax:

    myList.search(2);

### Arguments: 

- index `Integer` the index of element to return.

### Returns:

- `object` returns the element's information at the specified position in this list

### Example: 


LinkedList Method: reverse {#LinkedList: reverse}
-------------------------------------------------

Takes an input linked list and returns a new linked list with the order of the elements reversed.

### Syntax:

    myList.reverse();

### Arguments:

- `void

### Returns:

- `void` returns a new linked list with the order of the elements reversed.

### Example: 


LinkedList Method: getLast {#LinkedList: getLast}
-------------------------------------------------

Get the last element in this list.

### Syntax:

    myList.getLast(); 

### Arguments:

- `void`

### Returns:

- `object` Returns the last element in this list.

### Example: 


LinkedList Method: displayReverse {#LinkedList: displayReverse}
---------------------------------------------------------------

Converts the list into a string representation in reverse mode.

### Syntax:

    myList.display():

### Arguments:

### Returns:

- `String` A string representation of the list in reverse order.

### Example: 

LinkedList Method: display {#LinkedList: display}
-------------------------------------------------

Converts the list into a string representation.

### Syntax:

    myList.displayReverse():

### Arguments:

- `void`

### Returns:

- `String` A string representation of the list in reverse order.

### Example: 

