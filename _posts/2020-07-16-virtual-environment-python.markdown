---
layout: single
title:  "Python: Creating a virtual environment"
date:   2020-07-16 00:00:00 -0300
categories: python venv
---

virtualenv is used to manage Python packages for different projects. Using virtualenv allows you to avoid installing Python packages globally which could break system tools or other projects. You can install virtualenv using pip.

Note: If you are using Python 3.3 or newer, the venv module is the preferred way to create and manage virtual environments. venv is included in the Python standard library and requires no additional installation.

Installing virtualenv
=====================
{% highlight shell %}
python3 -m pip install --user virtualenv
{% endhighlight %}

Creating a virtual environment
==============================
{% highlight shell %}
python3 -m venv env
{% endhighlight %}

Activating a virtual environment
================================
{% highlight shell %}
source env/bin/activate
{% endhighlight %}

Install packages
================================
{% highlight shell %}
pip install -r requirements.txt
{% endhighlight %}          

Freeze requirements
================================
{% highlight shell %}
pip freeze > requirements.txt
{% endhighlight %}

Leaving the virtual environment
===============================
{% highlight shell %}
deactivate
{% endhighlight %}

Reference: 
- [python.org][1]

[1]: https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/
