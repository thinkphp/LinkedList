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
       Inserts the specfied value to the beginning of this list. 
       @param val (Integer/String/Object) - the specified value to append.
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

       return true; 
    },

    /** 
       Appends to the end of this list.
       @param val - the specfied value to insert to the end of this list. 
       @return void
     */
    insertAtTail: function(val) { 

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

         return true;
    },

    /**
     * Removes the element at the specified position in this list
     * @param index - input position in list.
     * @return - returns the element's information deleted.
     */
    remove: function(index) {

           //check if the index is in range [0,length-1]
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

         //return null if the index is out of range
         return null;
    },

    /** 
       Returns the number of elements in this list  
       @param void
       @return returns the number of elements
     */
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
      Get the element's information at the specified position in this list.
      If the specified index is out of range (index < 0 || index >= length()) return NULL.
      @param - index - index of element to return.
      @retun - returns the element's info at the specified position in this list. 
     */
    search: function(index) {

               //check if the index is in [0,length-1] then go ahead
               if(index < this._length && index >= 0) {

                        var curr = this._head, 
                            i = 0;

                        //this loop is used to find out the right place
                        while(i<index) {

                             curr = curr.next;
                             i++;
                        }       

                    return curr.info;    
               } 
 
        //if the index is out of range
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
        @param void
        @return (String) A string representation of the list.
     */
    display: function() {

                //joins all elements of this array out into a string, and returns the string
                //the items will be separated by comma
                return this.toArray().join(",") 
    },

    /**
        Converts the list (reverse mode) into a string representation
        @param void
        @return (String) A string representation of the list in reverse order.
     */
    displayReverse: function() {

                var out = [], 
                    n = this._length;
       
                for(var i=n-1;i>=0;i--) {

                    out.push(this.search(i)) 
                }          

        //joins all elements of this array out into a string, and returns the string
        //the items will be separated by comma
        return out.join(",")
    }
});