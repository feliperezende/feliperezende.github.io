---
layout: single
title:  "Barrier: control multiple computers with one keyboard mouse"
date:   2020-11-04 00:00:00 -0300
categories: kvm keyboard mouse monitor
tags : [mac os, linux]
---

[Barrier][4] is an open-source kvm software that allows you to control multiple computers with one
keyboard and mouse.

It mimics the functionality of a [KVM switch][3], which historically would allow you to use a single keyboard and mouse
to control multiple computers by physically turning a dial on the box to switch the machine you're controlling at any given moment.
Barrier does this in software.

## Usage
Install and run barrier on each machine that will be sharing. On the machine with the keyboard and mouse, make it the server.

{% include figure image_path="/imgs/barrier.jpg" alt="Barrier running on macOS as server." caption="Barrier running on macOS as server."%}

## OS support
Barrier works on:

- Windows 7, 8, 8.1, 10, and 11
- macOS
- Linux
- FreeBSD
- OpenBSD

## Installing on macOS
On macOS you can install it using [brew](https://brew.sh/).
{% highlight shell %}
$ brew cask install barrier
{% endhighlight %}

## Installing on Arch/Manjaro Linux
On Arch Linux you can install it using pacman.
{% highlight shell %}
$ pacman -S barrier
{% endhighlight %}

## Links
- [Barrier on Homebrew][1]
- [Barrier on Github][2]

[1]: https://formulae.brew.sh/cask/barrier
[2]: https://github.com/debauchee/barrier
[3]: https://en.wikipedia.org/wiki/KVM_switch
[4]: https://github.com/debauchee/barrier
