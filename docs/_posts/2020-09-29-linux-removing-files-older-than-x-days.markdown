---
layout: single
title:  "Removing files older than 30 days"
date:   2020-09-29 00:00:00 -0300
categories: linux shell
---

{% highlight shell %}
find /path/to/ -type f -mtime +30 -name '*.mp4' -execdir rm -- '{}' \;
{% endhighlight %}

- find: the unix command for finding files/directories/links and etc.

- /path/to/: the directory to start your search in.

- -type f: only find files.

- -name '*.mp4': list files that ends with .mp4.

- -mtime +30: only consider the ones with modification time older than 30 days.

- -execdir ... \;: for each such result found, do the following command in ....

- rm -- '{}': remove the file; the {} part is where the find result gets substituted into from the previous part.


