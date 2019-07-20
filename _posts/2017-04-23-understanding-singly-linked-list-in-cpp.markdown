---
layout: post
title:  "[C++] Understanding Singly Linked List"
date:   2017-04-23
---

A linked list is a data structure which stores data in non-contiguous memory.

<!--more-->

There are various advantages of linked lists over arrays:

1. The size of linked list is not fixed.
2. It’s easier to add a new element in a linked list.

![SLL]({{ site.baseurl }}/img/sll.png) <small>Fig1. - A singly linked list. Source: [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)</small>

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

![SLL]({{ site.baseurl }}/img/slluml.png) <small>Fig2. - UML for the linkedList class.</small>

## Adding a Node

![SLL]({{ site.baseurl }}/img/sllnewnode.png) <small>Fig3. - Adding new node</small>

Insertion of a node is performed by `insertNode(node* newNode, int position)` function. It takes two arguments, first is the node that needs to be inserted and the second one is the position where the node is to be inserted.

There are three cases which should be taken into consideration while inserting a node at certain position in a Linked List. Let’s look at them one by one:

1. Check whether position comes in between the head and the tail of the linked list, if not return an error.
2. If there is only one node in the Linked List i.e head then insert the node next to head, increment listLength and return true.
3. If there are more than one node in the list then traverse the list until the position is found and then change the pointer of the previous node to the new node and the pointer of new node to the next node, increase thelistLength by one and return true.

## Delete a Node from a Linked List

![SLL]({{ site.baseurl }}/img/slldel.png) <small>Fig4. - Deleting node.</small>

A node can be deleted in the same way we inserted it using `removeNode(int position)`:

1. Check whether position comes in between the head and the tail of the linked list, if not return an error.
2. If there is only one node in the Linked List i.e head then there is nothing to remove.
3. If there are more than one node in the list then traverse the list until the position is found and then change the pointer of the previous node to the next of the next node, and decrease thelistLength by one and return true.

---

## Code

Header file `linkedList.h`:

{% highlight cpp %}
#ifndef LINKEDLIST_H
#define LINKEDLIST_H
#include <iostream>
#include <string>
using namespace std;
/** Author - Mayank Shekhar (github.com/mayankshekhar03) */
/**struct node holds data (type-string) and reference to the next node*/
struct node{
    string data;
    node *next;
};
class LinkedList
{
    public:
        LinkedList();
        /**constructor creates the head node and initializes listLength variable to 0 */
        
        bool insertNode(node* newNode, int position);
        /**the method insertNode takes two arguments, newNode and inserts it to the position given in second argument returns true if
successful */
        
        bool removeNode (int position);
        /**takes position of the node to be deleted as argument and returns true if deleted */
        
        void printList ();
        /**prints data of each node of the list */
        
        ~LinkedList();
    
     private:
        node * head;
        int listLength;
};
#endif // LINKEDLIST_H
{% endhighlight %}

Class `linkedList.cpp`:

{% highlight cpp %}
#include "LinkedList.h"
LinkedList::LinkedList()
{
    head->data = "NO DATA";
    head->next = NULL;
    listLength = 0;
}
bool LinkedList::insertNode(node* newNode, int position){
    if (position <= 0 || position > listLength+1){
        cout<<"\nSpecified position doesn't exist."<<endl;
        return false;
    }
    if (head->next == NULL){
        head->next = newNode;
        newNode->next = NULL;
        listLength++;
        return true;
    }
    int count = 1;
    node* p = head;
    node* q = p->next;
    while(q){
        if (count == position){
            p->next = newNode;
            newNode->next = q;
            listLength++;
            return true;
        }
        p = q;
        q = p->next;
        count++;
    }
    if (count == position){
            p->next = newNode;
            newNode->next = q;
            listLength++;
            return true;
    }
    cout<<"\nNode wasn't added to the list."<<endl;
    return false;
}
bool LinkedList::removeNode(int position){
    if (position <= 0 || position > listLength+1){
        cout<<"\nInvalid position."<<endl;
        return false;
    }
    if (head->next == NULL){
        cout<<"\nNothing to remove."<<endl;
        return false;
    }
    int count = 1;
    node* p = head;
    node* q = head->next;
    while(q){
        if (count == position){
            p->next = q->next;
            delete q;
            listLength--;
            return true;
        }
        p = q;
        q = p->next;
        count++;
    }
    cout<<"\nNothing removed."<<endl;
    return false;
}
void LinkedList::printList(){
    int count = 0;
    node * p = head;
    node * q = p->next;
    while(q){
        p = q;
        cout << "\n-----------------------------\n";
        cout << "\t position: " << count+1 << endl;
        cout << "\t data: " << p -> data << endl;
        count++;
        q = p->next;
    }
}
LinkedList::~LinkedList(){
    node* p = head;
    node* q = p->next;
    while (q){
        p = q;
        q = p->next;
        if (q) delete p;
    }
}
{% endhighlight %}

Example `main.cpp`:

{% highlight cpp %}
#include <iostream>
#include "LinkedList.h"
using namespace std;
int main()
{
    node * name = new node; //1
    name->data = "Mayank Shekhar";
    node * sec = new node; //2
    sec->data = "CS32";
    node * roll = new node;  //3
    roll->data = "123456789";
LinkedList myInfo;
    myInfo.insertNode(name, 1);
    myInfo.insertNode(sec, 2);
    myInfo.printList();
    cout<<"\n===================================================="<<endl;
    myInfo.insertNode(roll, 3);
    myInfo.printList();
    cout<<"\n===================================================="<<endl;
    myInfo.removeNode(2);
    myInfo.printList();
}
{% endhighlight %}