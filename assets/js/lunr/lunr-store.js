var store = [{
        "title": "Ntfs Mountain Lion English",
        "excerpt":"HOW TO: NFTS Read and write on Lion/Mountain Lion install brew package manager. http://mxcl.github.com/homebrew/ install the following packages. $ brew install fuse4x $ brew install ntfs-3g copy the following file and set permissions. $ sudo cp -rfX /usr/local/Cellar/fuse4x-kext/0.8.14/Library/Extensions/fuse4x.kext /System/Library/Extensions $ sudo chmod +s /System/Library/Extensions/fuse4x.kext/Support/load_fuse4x backup the mount script. $ sudo...","categories": ["lessons"],
        "tags": ["osx","tutorial","ntfs"],
        "url": "https://feliperezende.github.com/lessons/2013/02/28/NTFS-Mountain-Lion-English.html",
        "teaser": null
      },{
        "title": "How to set Android TextView line spacing?",
        "excerpt":"You can use lineSpacingExtra or lineSpacingMultiplier in your XML file.   Example:   &lt;TextView     android:layout_width=\"wrap_content\"     android:layout_height=\"wrap_content\"     android:lineSpacingMultiplier=\"0.7\"&gt;  More on stackoverflow.   ","categories": ["android","sdk","textview","line","spacing"],
        "tags": [],
        "url": "https://feliperezende.github.com/android/sdk/textview/line/spacing/2020/04/27/android-textview-linespacing.html",
        "teaser": null
      },{
        "title": "Installing ffmpeg on EC2",
        "excerpt":"SSH into your instance and become root $ sudo su - Go to the the /usr/local/bin directory $ cd /usr/local/bin Inside the /usr/local/bin directory, create an “ffmpeg” directory $ mkdir ffmpeg Go into the new directory $ cd ffmpeg Go to static build directory at http://ffmpeg.gusari.org/static/64bit/ and pick the latest...","categories": ["ffmpeg","ec2"],
        "tags": [],
        "url": "https://feliperezende.github.com/ffmpeg/ec2/2020/07/07/ffmpeg-on-ec2.html",
        "teaser": null
      },{
        "title": "How do I redirect HTTP traffic to HTTPS on Apache",
        "excerpt":"Open your Apache configuration file. Possible locations include /etc/httpd/conf/httpd.conf (Apache 2/httpd), /etc/apache2/sites-enabled/ (Apache 2.4), or /etc/apache2/apache2.conf (Apache on Ubuntu). Add a rewrite rule to the VirtualHost section of your configuration file similar to the following: &lt;VirtualHost *:80&gt; RewriteEngine On RewriteCond %{HTTP:X-Forwarded-Proto} =http RewriteRule .* https://%{HTTP:Host}%{REQUEST_URI} [L,R=permanent] &lt;/VirtualHost&gt; Save your Apache...","categories": ["apache","http"],
        "tags": [],
        "url": "https://feliperezende.github.com/apache/http/2020/07/13/redirect-http-traffic-to-https.html",
        "teaser": null
      }]
