function deviceTest(){
    navigator.keyboard.lock();
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "iOS";
    }
    else if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'MacOS';
    }
    //  else if (iosPlatforms.indexOf(platform) !== -1) {
    //     os = 'iOS';
    // }
     else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    console.log(os);
    document.getElementById("device").innerHTML = os;
}

function display(){
    var device = document.getElementById("device").innerHTML;
    if (device === 'MacOS')
    {
        iOS();
    }
    if (device === 'iOS')
    {
        iOS();
    }
    if (device === 'Windows')
    {
        Windows();
    }
    if (device === 'Android')
    {
        Android();
    }
    if (device === 'Linux')
    {
        Linux();
    }
}
function Windows(){
    let defaultValue = 7500;
    let timestamp = document.getElementById("timestamp").value;
    if (timestamp > 0)
    {
        defaultValue = timestamp * 1250;
    }
    if (defaultValue === 7500)
    {
        console.log('default value: 7500');
    }
    else{
        console.log(defaultValue);
    }
    let fscreen = document.getElementById("windows");
    fscreen.style.zIndex = "50";
    fscreen.style.opacity = "1";
    document.body.webkitRequestFullScreen();
    var count=0;
    var stage=1;
    var stage2=3;
    var counter=setInterval(timer, defaultValue); //1000 will  run it every 1 second
    var ref="Configuring updates";

    function timer()
    {
        count=count+1;
        if (count <= 0)
        {
            clearInterval(counter);
            return;
        }

        document.getElementById("timer").innerHTML=count +'%';
        
        if (count > 29)
        {
            count=count+2;
        }
        
        if (count > 68)
        {
            ref="Installing Updates";
            count=count+3;
            document.getElementById("ref").innerHTML=ref;
        }

        if (count === 100)
        {
            clearInterval(counter);
            let fscreen = document.getElementById("windows");
            fscreen.style.zIndex = "-25";
            fscreen.style.opacity = "0";
            const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
            cancellFullScreen.call(document);
            count = 0;
        }

        if (count > 99)
        {
            clearInterval(counter);
            let fscreen = document.getElementById("windows");
            fscreen.style.zIndex = "-25";
            fscreen.style.opacity = "0";
            const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
            cancellFullScreen.call(document);
            count = 0;
        }
    }
}

function Android(){
    let defaultValue = 7500;
    let timestamp = document.getElementById("timestamp").value;
    if (timestamp > 0)
    {
        defaultValue = timestamp * 1250;
    }
    if (defaultValue === 7500)
    {
        console.log('default value: 7500');
    }
    else{
        console.log(defaultValue);
    }
    let fscreen = document.getElementById("Android");
    fscreen.style.zIndex = "50";
    fscreen.style.opacity = "1";
    document.body.webkitRequestFullScreen();
    setTimeout(function hideLogo(){
        document.getElementById('androidLogo').style.zIndex="-25";
        document.getElementById('androidLogo').style.display="none";
    }, 2000);
    var count=0;
    var stage=1;
    var stage2=3;
    var counter=setInterval(timer, defaultValue);
    function timer()
    {
        count=count+1;
        if (count <= 0)
        {
            clearInterval(counter);
            return;
        }

        document.getElementById("timerAndroid").innerHTML=count +'%';
        
        if (count > 29)
        {
            count=count+2;
        }
        
        if (count > 68)
        {
            count=count+3;
        }

        if (count === 100)
        {
            clearInterval(counter);
            let fscreen = document.getElementById("Android");
            fscreen.style.zIndex = "-25";
            fscreen.style.opacity = "0";
            const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
            cancellFullScreen.call(document);
            count = 0;
        }

        if (count > 99)
        {
            clearInterval(counter);
            let fscreen = document.getElementById("Android");
            fscreen.style.zIndex = "-25";
            fscreen.style.opacity = "0";
            const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
            cancellFullScreen.call(document);
            count = 0;
        }
    }
}

function iOS(){
    let defaultValue = 7500;
    let timestamp = document.getElementById("timestamp").value;
    if (timestamp > 0)
    {
        defaultValue = timestamp * 1250;
    }
    if (defaultValue === 7500)
    {
        console.log('default value: 7500');
    }
    else{
        console.log(defaultValue);
    }
    let fscreen = document.getElementById("iOS");
    let fscreenV = document.getElementById("iOSvideo");
    fscreenV.webkitRequestFullScreen();
    fscreenV.style.zIndex = "1";
    fscreen.style.zIndex = "50";
    fscreen.style.opacity = "1";
    var count=0;
    var stage=1;
    var stage2=3;
    var counter=setInterval(timer, defaultValue);
    function timer()
    {
        count=count+1;
        if (count <= 0)
        {
            clearInterval(counter);
            return;
        }
        var left = count;
        document.getElementById('bar').style.width = left + '%';
        
        
        if (count > 29)
        {
            count=count+2;
        }
        
        if (count > 68)
        {
            count=count+3;
        }

        if (count === 100)
        {
            clearInterval(counter);
            let fscreen = document.getElementById("iOS");
            fscreen.style.zIndex = "-25";
            fscreenV.style.zIndex = "-25";
            fscreen.style.opacity = "0";
            const cancellFullScreen = fscreenV.exitFullscreen || fscreenV.mozCancelFullScreen || fscreenV.webkitExitFullscreen || fscreenV.msExitFullscreen;
            cancellFullScreen.call(fscreenV);
            count = 0;
        }

        if (count > 99)
        {
            clearInterval(counter);
            let fscreen = document.getElementById("iOS");
            fscreen.style.zIndex = "-25";
            fscreenV.style.zIndex = "-25";
            fscreen.style.opacity = "0";
            const cancellFullScreen = fscreenV.exitFullscreen || fscreenV.mozCancelFullScreen || fscreenV.webkitExitFullscreen || fscreenV.msExitFullscreen;
            cancellFullScreen.call(fscreenV);
            count = 0;
        }
    }
}

function Linux(){
    let defaultValue = 7500;
    let timestamp = document.getElementById("timestamp").value;
    if (timestamp > 0)
    {
        defaultValue = timestamp * 1250;
    }
    if (defaultValue === 7500)
    {
        console.log('default value: 7500');
    }
    else{
        console.log(defaultValue);
    }
    let fscreen = document.getElementById("Linux");
    fscreen.style.zIndex = "50";
    fscreen.style.opacity = "1";
    document.body.webkitRequestFullScreen();
    var count=0;
    var stage=0;
    var stage2=48;
    var defaultText = document.getElementById('Linux').innerHTML;
    var counter=setInterval(timer, defaultValue);
    function timer()
    {
        count=count+1;
        var line = [];
        line[0]= "<p>48 new update found...</p>"
        line[1]= "<p>Get:1 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 emacs25-common all 25.2+1-6 [13.1 MB]</p>";
        line[2]= "<p>Get:2 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 liblockfile-bin amd64 1.14-1.1 [11.9 kB]</p>";
        line[3]= "<p>Get:3 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 liblockfile1 amd64 1.14-1.1 [6,804 B]</p>";
        line[4]= "<p>Get:4 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 emacs25-bin-common amd64 25.2+1-6 [127 kB]</p>";
        line[5]= "<p>Get:5 http://in.archive.ubuntu.com/ubuntu bionic-updates/main amd64 libgif7 amd64 5.1.4-2ubuntu0.1 [30.9 kB]</p>";
        line[6]= "<p>Get:6 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 libotf0 amd64 0.9.13-3build1 [44.6 kB]</p>";
        line[7]= "<p>Get:7 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 m17n-db all 1.7.0-2 [1,239 kB]</p>";
        line[8]= "<p>Get:8 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 libm17n-0 amd64 1.7.0-3build1 [243 kB]</p>";
        line[9]= "<p>Get:9 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 emacs25 amd64 25.2+1-6 [3,468 kB]</p>";
        line[10] = "<p>Get:10 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 emacs all 47.0 [1,748 B]</p>";
        line[11] = "<p>Get:11 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 emacs25-el all 25.2+1-6 [15.6 MB]</p>";
        line[12] = "<p>Fetched 33.9 MB in 3min 20s (170 kB/s) </p>";
        line[13] = "<p>Selecting previously unselected package emacs25-common.</p>";
        line[14] = "<p>(Reading database ... 168266 files and directories currently installed.)</p>";
        line[15] = "<p>Preparing to unpack .../00-emacs25-common_25.2+1-6_all.deb ...</p>";
        line[16] = "<p>Unpacking emacs25-common (25.2+1-6) ...</p>";
        line[17] = "<p>Selecting previously unselected package liblockfile-bin.</p>";
        line[18] = "<p>Preparing to unpack .../01-liblockfile-bin_1.14-1.1_amd64.deb ...</p>";
        line[19] = "<p>Unpacking liblockfile-bin (1.14-1.1) ...</p>";
        line[20] = "<p>Selecting previously unselected package liblockfile1:amd64.</p>";
        line[21] = "<p>Preparing to unpack .../02-liblockfile1_1.14-1.1_amd64.deb ...</p>";
        line[22] = "<p>Unpacking liblockfile1:amd64 (1.14-1.1) ...</p>";
        line[23] = "<p>Selecting previously unselected package emacs25-bin-common.</p>";
        line[24] = "<p>Preparing to unpack .../03-emacs25-bin-common_25.2+1-6_amd64.deb ...</p>";
        line[25] = "<p>Unpacking emacs25-bin-common (25.2+1-6) ...</p>";
        line[26] = "<p>Selecting previously unselected package libgif7:amd64.</p>";
        line[27] = "<p>Preparing to unpack .../04-libgif7_5.1.4-2ubuntu0.1_amd64.deb ...</p>";
        line[28] = "<p>Unpacking libgif7:amd64 (5.1.4-2ubuntu0.1) ...</p>";
        line[29] = "<p>Selecting previously unselected package libotf0:amd64.</p>";
        line[30] = "<p>Preparing to unpack .../05-libotf0_0.9.13-3build1_amd64.deb ...</p>";
        line[31] = "<p>Unpacking libotf0:amd64 (0.9.13-3build1) ...</p>";
        line[32] = "<p>Selecting previously unselected package m17n-db.</p>";
        line[33] = "<p>Preparing to unpack .../06-m17n-db_1.7.0-2_all.deb ...</p>";
        line[34] = "<p>Unpacking m17n-db (1.7.0-2) ...</p>";
        line[35] = "<p>Selecting previously unselected package libm17n-0:amd64.</p>";
        line[36] = "<p>Preparing to unpack .../07-libm17n-0_1.7.0-3build1_amd64.deb ...</p>";
        line[37] = "<p>Unpacking libm17n-0:amd64 (1.7.0-3build1) ...</p>";
        line[38] = "<p>Selecting previously unselected package emacs25.</p>";
        line[39] = "<p>Preparing to unpack .../08-emacs25_25.2+1-6_amd64.deb ...</p>";
        line[40] = "<p>Unpacking emacs25 (25.2+1-6) ...</p>";
        line[41] = "<p>Selecting previously unselected package emacs.</p>";
        line[42] = "<p>Preparing to unpack .../09-emacs_47.0_all.deb ...</p>";
        line[43] = "<p>emacsen-common: Handling install of emacsen flavor emacs25</p>";
        line[44] = "<p>Install dictionaries-common for emacs25</p>";
        line[45] = "<p>install/dictionaries-common: Byte-compiling for emacsen flavour emacs25</p>";
        line[46] = "<p>Setting up emacs (47.0) ...</p>";
        line[47] = "<p>Processing triggers for libc-bin (2.27-3ubuntu1) ...</p>";
        
        document.getElementById('Linux').innerHTML = document.getElementById('Linux').innerHTML + line[stage];
        stage=stage+1;
        if (count <= 0)
        {
            clearInterval(counter);
            return;
        }
        
        if (count > 29)
        {
            count=count+2;
        }
        
        if (count > 68)
        {
            count=count+3;
        }

        if (count === 100)
        {
            clearInterval(counter);
            let fscreen = document.getElementById("Linux");
            fscreen.style.zIndex = "-25";
            fscreen.style.opacity = "0";
            const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
            cancellFullScreen.call(document);
            count = 0;
            document.getElementById('Linux').innerHTML = "<p>admin@user1 $ sudo apt-get update</p>"+"<p>Checking for Updates...</p>";
        }

        if (count > 99)
        {
            clearInterval(counter);
            let fscreen = document.getElementById("Linux");
            fscreen.style.zIndex = "-25";
            fscreen.style.opacity = "0";
            const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
            cancellFullScreen.call(document);
            count = 0;
            document.getElementById('Linux').innerHTML = defaultText;
        }
    }
}