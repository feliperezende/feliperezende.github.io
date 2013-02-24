---
layout: post
category : lessons
tags : [osx, tutorial, ntfs]
---

Como fazer NTFS read-write funcionar no OS X Lion/Mountain Lion:


1. instalar o package manager brew. <http://mxcl.github.com/homebrew/>

2. instalar os seguintes pacotes.

		brew install fuse4x
		brew install ntfs-3g

3. copiar o seguinte arquivo e aplicar permissão.

		sudo cp -rfX /usr/local/Cellar/fuse4x-kext/0.8.14/Library/Extensions/fuse4x.kext /System/Library/Extensions
		sudo chmod +s /System/Library/Extensions/fuse4x.kext/Support/load_fuse4x

4. criar um backup do script de mount.

		sudo mv /sbin/mount_ntfs /sbin/mount_ntfs.orig

5. criar um novo arquivo e aplicar as permissões.

		sudo touch /sbin/mount_ntfs
		sudo chmod 0755 /sbin/mount_ntfs
		sudo chown 0:0 /sbin/mount_ntfs
		sudo nano /sbin/mount_ntfs

6. conteúdo do arquivo.

		#!/bin/bash

		VOLUME_NAME="${@:$#}"
		VOLUME_NAME=${VOLUME_NAME#/Volumes/}
		USER_ID=501
		GROUP_ID=20
		TIMEOUT=20

		if [ `/usr/bin/stat -f "%u" /dev/console` -eq 0 ]; then
				USERNAME=`/usr/bin/defaults read /library/preferences/com.apple.loginwindow | /usr/bin/grep autoLoginUser | /usr/bin/awk '{ print $3 }' | /usr/bin/sed 's/;//'`
				if [ "$USERNAME" = "" ]; then
						until [ `stat -f "%u" /dev/console` -ne 0 ] || [ $TIMEOUT -eq 0 ]; do
								sleep 1
								let TIMEOUT--
						done
						if [ $TIMEOUT -ne 0 ]; then
								USER_ID=`/usr/bin/stat -f "%u" /dev/console`
								GROUP_ID=`/usr/bin/stat -f "%g" /dev/console`
						fi
				else
						USER_ID=`/usr/bin/id -u $USERNAME`
						GROUP_ID=`/usr/bin/id -g $USERNAME`
				fi
		else
				USER_ID=`/usr/bin/stat -f "%u" /dev/console`
				GROUP_ID=`/usr/bin/stat -f "%g" /dev/console`
		fi

		/usr/local/bin/ntfs-3g \
				-o volname="${VOLUME_NAME}" \
				-o local \
				-o noappledouble \
				-o negative_vncache \
				-o auto_xattr \
				-o auto_cache \
				-o noatime \
				-o windows_names \
				-o user_xattr \
				-o inherit \
				-o uid=$USER_ID \
				-o gid=$GROUP_ID \
				-o allow_other \
				"$@" &> /var/log/ntfsmnt.log

		exit $?;


Referências:

1. <http://psionides.eu/2011/11/20/how-to-fix-ntfs-support-on-osx-lion/>
2. <http://fernandoff.posterous.com/ntfs-write-support-on-osx-lion-with-ntfs-3g-f>
