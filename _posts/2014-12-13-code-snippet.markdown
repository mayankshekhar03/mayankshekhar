---
layout: post
title:  "[C++] Understanding Singly Linked List"
date:   2017-04-23
---

<p class="intro"><span class="dropcap">A</span> linked list is a data structure which stores data in non-contiguous memory. There are various advantages of linked lists over arrays:</p>

1. The size of linked list is not fixed.
2. It’s easier to add a new element in a linked list.

<figure>
	<img src="{{ '/assets/img/sll.png' | prepend: site.baseurl }}" alt=""> 
	<figcaption>Fig1. - A singly linked list</figcaption>
</figure>

Each element in a singly linked list contains a link (pointer) to its next element. The last element in a linked list has a pointer to NULL.

Firstly, we will define `struct node` which will contain data of type string (you can take data of any type) and a pointer next of type node which points to the next node in the list.

{% highlight cpp %}
struct node{
    string data;
    node *next;
};
{% endhighlight %}

Now that we have a structure to hold data in a single node we need to define a class which would initialize our linked list and use the struct above to build a list of nodes i.e linked list.

The UML for the class is given below:

<figure>
	<img src="{{ '/assets/img/slluml.png' | prepend: site.baseurl }}" alt=""> 
	<figcaption>Fig2. - UML for the linkedList class</figcaption>
</figure>

## Adding a Node

<figure>
	<img src="{{ '/assets/img/sllnewnode.png' | prepend: site.baseurl }}" alt=""> 
	<figcaption>Fig3. - Adding new node</figcaption>
</figure>

Insertion of a node is performed by `insertNode(node* newNode, int position)` function. It takes two arguments, first is the node that needs to be inserted and the second one is the position where the node is to be inserted.

There are three cases which should be taken into consideration while inserting a node at certain position in a Linked List. Let’s look at them one by one:

1. Check whether position comes in between the head and the tail of the linked list, if not return an error.
2. If there is only one node in the Linked List i.e head then insert the node next to head, increment listLength and return true.
3. If there are more than one node in the list then traverse the list until the position is found and then change the pointer of the previous node to the new node and the pointer of new node to the next node, increase thelistLength by one and return true.

## Delete a Node from a Linked List

<figure>
	<img src="{{ '/assets/img/slldel.png' | prepend: site.baseurl }}" alt=""> 
	<figcaption>Fig4. - Deleting node</figcaption>
</figure>

A node can be deleted in the same way we inserted it using `removeNode(int position)`:

1. Check whether position comes in between the head and the tail of the linked list, if not return an error.
2. If there is only one node in the Linked List i.e head then there is nothing to remove.
3. If there are more than one node in the list then traverse the list until the position is found and then change the pointer of the previous node to the next of the next node, and decrease thelistLength by one and return true.