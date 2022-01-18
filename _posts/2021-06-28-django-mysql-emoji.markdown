---
layout: single
title:  "Django MySQL emoji support"
date:   2021-06-28 00:00:00 -0300
categories: django mysql emoji
tags : [django, python, mysql]
---

This post explains how to add emoji support to MySQL.

First set charset to utf8mb4 and collate to utf8mb4_unicode_ci.
## Charset
{% highlight sql %}
CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
{% endhighlight %}

## Database
{% highlight sql %}
ALTER DATABASE database_name CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
{% endhighlight %}

## Table
{% highlight sql %}
ALTER TABLE table_name CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
{% endhighlight %}

## Column
{% highlight sql %}
ALTER TABLE table_name MODIFY COLUMN col VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

ALTER TABLE table_name MODIFY COLUMN col VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;

ALTER TABLE table_name MODIFY COLUMN col VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL;
{% endhighlight %}

## settings.py
Add charset to database options

{% highlight python %}
DATABASES = {
    'default': {
        'ENGINE':'django.db.backends.mysql',
        ...
        'OPTIONS': {'charset': 'utf8mb4'},
    }
}
{% endhighlight %}


Links:
- [Django Cook Book][1]

[1]: https://xxx-cook-book.gitbooks.io/django-cook-book/content/Databases/emoji-support.html
