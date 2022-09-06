function deviceTest(){
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
    
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
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
    if (device === 'Mac OS')
    {
        macOS();
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
    fscreen.style.zIndex = "25";
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