---
layout: single
title:  "Installing ffmpeg on EC2"
date:   2020-07-07 18:00:00 -0300
categories: ffmpeg ec2
tags : [ec2, linux, ffmpeg]
---

This article explains how to install fffmpeg on a EC2 instance.

# Setup
SSH into your instance and become root
{% highlight shell %}
$ sudo su -
{% endhighlight %}

Go to the the /usr/local/bin directory
{% highlight shell %}
$ cd /usr/local/bin
{% endhighlight %}

Inside the /usr/local/bin directory, create an "ffmpeg" directory
{% highlight shell %}
$ mkdir ffmpeg
{% endhighlight %}

Go into the new directory
{% highlight shell %}
$ cd ffmpeg
{% endhighlight %}

Go to static build directory at http://ffmpeg.gusari.org/static/64bit/ and pick the latest version of FFMPEG.
{% highlight shell %}
$ wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
{% endhighlight %}

The file should now be in /usr/local/bin/ffmpeg. Untar it...
{% highlight shell %}
$ tar -xf ffmpeg-release-amd64-static.tar.xz
{% endhighlight %}

Move files
{% highlight shell %}
$ mv ffmpeg-release-amd64-static/* .
{% endhighlight %}

If you want to be able to execute FFMPEG from any directory, simply create a symlink into /usr/bin like this:
{% highlight shell %}
$ ln -s /usr/local/bin/ffmpeg/ffmpeg /usr/bin/ffmpeg
{% endhighlight %}

Now, you should be able to run the command "ffmpeg" from anywhere

# Reference
- [nbcnc on AWS Forums][2]
- [Vivek Maskara on Medium][1]

[1]: https://medium.com/@maskaravivek/how-to-install-ffmpeg-on-ec2-running-amazon-linux-451e4a8e2694
[2]: https://forums.aws.amazon.com/thread.jspa?messageID=332091
