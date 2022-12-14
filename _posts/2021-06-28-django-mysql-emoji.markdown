---
layout: single
title:  "Django MySQL emoji support"
date:   2021-06-28 00:00:00 -0300
categories: django mysql emoji
tags : [django, python, mysql]
---

This post explains how to add emoji support to MySQL.

## Introduction
In MySQL, the character set of a database, table, or column specifies the set of characters that can be stored in that database, table, or column. The collation of a database, table, or column specifies the rules for comparing and sorting the characters in a particular character set.

First, set charset to utf8mb4 and collate to utf8mb4_unicode_ci.

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

## Conclusion

UTF8MB4_UNICODE_CI is a character set and collation in MySQL. The character set specifies the set of characters that can be used in a MySQL database, while the collation specifies the rules for comparing and sorting the characters in a particular character set.

UTF8MB4 is a character set that uses the UTF-8 encoding, which is a variable-width encoding that can represent any Unicode character. This character set supports up to four-byte characters, which allows it to represent a wider range of characters than the standard UTF-8 character set.

UNICODE_CI is a collation that specifies a case-insensitive comparison for Unicode characters. This means that the characters will be compared and sorted without considering their case (upper or lower). For example, the strings "Hello" and "hello" would be considered equal using this collation.

In summary, UTF8MB4_UNICODE_CI is a character set and collation that allows you to store and compare Unicode characters in a MySQL database in a case-insensitive manner, using the UTF-8 encoding. This can be useful if you need to support a wide range of characters, including emojis, in your database.

Links:
- [Django Cook Book][1]

[1]: https://xxx-cook-book.gitbooks.io/django-cook-book/content/Databases/emoji-support.html
