/*
---
description: Linked List Implementation in MooTools

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
 core/1.4.5: '*'

provides: LinkedList
...
*/

function Node(info) {

     this.info = info;
     this.next = null; 
}

var LinkedList = new Class({

    /**
       Constructor of class
     */    
    initialize: function() {

          //pointer to first element in this list.
          this._head = null;
          //holds the number of element.
          this._length = 0; 
    },

    /**
       @param val - inserts the specfied value to the beginning of this list. 
     */
    insertAtHead: function(val) {

          if(this._head == null) {

                this._head = new Node(val);
          } else {

                var aux = this._head;
                this._head = new Node(val);
                this._head.next = aux;
          } 

                  this._length++; 
    },

    /**
       @param val - inserts the specfied value to the end of this list. 
     */
    insertAtTail: function(val) { 1 2 3

           if(this._head == null) {

                    this._head = new Node(val);
            } else {

                     var current = this._head;

                         while(current.next != null) {

                               current = current.next; 
                         }

                         current.next = new Node(val); 
                  } 

                  this._length++; 
    },

    /**
     * Removes the element at the specified position in this list
     * @param index - input position in list.
     * @return - returns the element's info deleted.
     */
    remove: function(index) {

           //check if the index if within valid interval
           if(index >= 0 && index < this._length) {

                            var curr = this._head;
 
                            //if index is the head
                            if(index == 0) {

                               this._head = curr.next;

                            } else {

                               var i = 0, prev; 

                               while(i < index) {
                                     prev = curr; 
                                     curr = curr.next;
                                     i++;
                               } 

                               prev.next = curr.next;
                            }
 
                            //decreases the length of list
                            this._length--; 

                       return curr.info;  
                    }

               return null;
    },

    getLength: function() {

         return this._length; 
    },

    /** 
       @param None 
       @return Returns an array containing all the elements in this list in the correct order.  
     */
    toArray: function() {

                  var out = [],
                      curr = this._head;

                  while(curr != null) {

                      out.push(curr.info);
                      curr = curr.next;
                  } 
              return out;
    },

    reverse: function() {

                  var prev = null, aux;

                  while(this._head !=null) {

                      aux = this._head.next;
                      this._head.next = prev;
                      prev = this._head;
                      this._head = aux;  
                  }            

                  this._head = prev;
    },

    /**
      @param - index - index of element to return.
      @retun - returns the element's info at the specified position in this list. 
     */
    search: function(index) {

               if(index < this._length && index >= 0) {

                        var curr = this._head, i = 0;

                        while(i<index) {

                             curr = curr.next;
                             i++;
                        }       

                    return curr.info;    
               } 

                    return null;
    },

    /**
       Get the last element in this list.
       @param void  
       @return Returns the last element in this list.
     */    
    getLast: function() {

                 var curr = this._head

                 while(curr.next != null) {
                       curr = curr.next;
                 }

                return curr;
    },

    /**
        Converts the list into a string representation
        @param Void
        @return (String) A string representation of the list.
     */
    display: function() {

                return this.toArray().join(",") 
    },

    displayReverse: function() {

                var out = [], 
                    n = this._length;
       
                for(var i=n-1;i>=0;i--) {

                    out.push(this.search(i)) 
                }          

        return out.join(",")
    }
});