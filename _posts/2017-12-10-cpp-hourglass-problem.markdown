---
layout: post
title:  "[C++] Hourglass Problem"
date:   2017-12-10
description: My solution to the hourglass problem on hackerrank.
---

<p class="intro"><span class="dropcap">M</span>y solution to the hourglass problem given here.</p>


{% highlight html %}
int main(){ //author: Mayank Shekhar (github.com/mayankshekhar03)
    /*curr = value of current hour glass
      max = hourglass with maximum value
      init = used to give max the first value of curr
    */
    int curr = 0, max = 0, init=0;
    vector< vector<int> > arr(6,vector<int>(6));
    for(int arr_i = 0;arr_i < 6;arr_i++){
       for(int arr_j = 0;arr_j < 6;arr_j++){
          cin >> arr[arr_i][arr_j];
       }
    }
    int hor = arr[1].size() - 2;
    int ver = arr[1].size() - 2;
    for (int i = 0; i < hor; i++){
        for (int j = 0; j < ver; j++){
            curr = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if( curr > max || (abs(curr) > max && init==0) ){
                max = curr;
                init = 1;
            }
        }
    }
    cout<<max;
    return 0;
}
{% endhighlight %}