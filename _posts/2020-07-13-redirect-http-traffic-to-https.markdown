---
layout: single
title:  "How do I redirect HTTP traffic to HTTPS on Apache"
date:   2020-07-13 18:00:00 -0300
categories: apache http
---

Open your Apache configuration file. Possible locations include /etc/httpd/conf/httpd.conf (Apache 2/httpd), /etc/apache2/sites-enabled/ (Apache 2.4), or /etc/apache2/apache2.conf (Apache on Ubuntu).

Add a rewrite rule to the VirtualHost section of your configuration file similar to the following:

{% highlight apache %}
<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTP:X-Forwarded-Proto} =http
    RewriteRule .* https://%{HTTP:Host}%{REQUEST_URI} [L,R=permanent]
</VirtualHost>
{% endhighlight %}

Save your Apache configuration file.

Restart Apache.

Reference: 
- [AWS][1]

[1]: https://aws.amazon.com/premiumsupport/knowledge-center/redirect-http-https-elb/
