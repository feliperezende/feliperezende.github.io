---
layout: single
title:  "Dump MySQL query to CSV"
date:   2022-05-02 00:00:00 -0300
categories: mysql csv
tags : [mysql, csv]
---

{% highlight bash %}
mysql -e "select * from table;" -h HOST --port=PORT -u USER -p DATABASE > mydumpfile.csv
{% endhighlight %}

