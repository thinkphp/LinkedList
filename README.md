Lastfm
======

Linked List implementation in MooTools.

A linked list is a set of items where each item is part of a node that also contains a link to a node.
When our primary interest is to go through a collection of items sequentially, one by one, we can organize the items as a linked list:
a basic data structure where each item contains the information that we need to get to the next item. The primary advantage of linked lists
over arrays is that the links provide us with the capability to rearrange the items efficiently. This flexivility is gained at the
expense of quick access to any arbitrary item in the list, because the only way to get to an item in the list is to follow links from the
beginning. 

http://en.wikipedia.org/wiki/Linked_list#Post_office_box_analogy

![Screenshot](http://farm8.staticflickr.com/7062/6821387570_d805710a33_b.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.

        #HEAD
        <script src="http://www.google.com/jsapi?key=ABQIAAAA1XbMiDxx_BTCY2_FkPh06RRaGTYH6UMl8mADNa0YKuWNNa8VNxQEerTAUcfkyrr6OwBovxn7TDAH5Q"></script>
        <script type="text/javascript">google.load("mootools", "1.4.5");</script>
        <script type="text/javascript" src="LinkedList.js"></script>

        