function fscreen(){
    let fscreen = document.getElementById("fscreen");
    fscreen.style.zIndex = "25";
    fscreen.style.opacity = "1";
    document.body.webkitRequestFullScreen();
    var count=0;
    var stage=1;
    var stage2=3;
    var counter=setInterval(timer, 12000); //1000 will  run it every 1 second
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
    
    
        if (count > 68)
    {
        ref="Installing Updates";
        document.getElementById("ref").innerHTML=ref;
    }

    if (count > 99)
    {
        clearInterval(counter);
        let fscreen = document.getElementById("fscreen");
        fscreen.style.zIndex = "-25";
        fscreen.style.opacity = "0";
        const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
        cancellFullScreen.call(document);
    }
    
    }

}