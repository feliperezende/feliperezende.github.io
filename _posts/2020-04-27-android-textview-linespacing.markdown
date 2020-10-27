---
layout: single
title:  "How to set Android TextView line spacing?"
date:   2020-04-27 18:00:00 -0300
categories: android sdk textview line spacing
---

You can use **lineSpacingExtra** or **lineSpacingMultiplier** in your XML file.


## Example:

{% highlight xml %}

<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:lineSpacingMultiplier="0.7">

{% endhighlight %}

More on [stackoverflow][so-post].

[so-post]: https://stackoverflow.com/questions/6863974/android-textview-padding-between-lines 
