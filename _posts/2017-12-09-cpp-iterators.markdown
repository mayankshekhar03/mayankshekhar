---
layout: post
title:  "[C++] Iterators"
date:   2017-12-09
---

<p class="intro"><span class="dropcap">I</span>terators are used to point at memory addresses. As the name suggests, iterators can be used to sequentially iterate through memory.</p>

Header that should be included in order to work with iterators is:

`#include <iterator>`

Operations of iterators :-

1. `begin()` :- This function is used to return the beginning position of the container.

2. `end()` :- This function is used to return the end position of the container.

Example:

{% highlight html %}
#include <iostream>
#include <interator>
#include <vector>
using namespace std;
int main(){
  vector<int> a = {1, 2, 3, 4, 5};
  
  //interator declaration 
  vector<int>::iterator ia;
  
  //usage example of iterator
  for(ia = a.begin(); ia < a.end(); ++ia){
    cout<<*ia<<' ';
  }
  
  return 0;
}
{% endhighlight %}