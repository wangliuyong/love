var a = new Audio();
if (a.canPlayType('audio/wav')) {
    a.src = 'https://test-1257826148.cos.ap-guangzhou.myqcloud.com/545d_065b_5258_c75e797baa11f81cdb68e255aa5c4034.m4a';
    a.play();
}
var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2014, 9, 31);
together.setHours(20);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

if (!document.createElement('canvas').getContext) {
    var msg = document.createElement("div");
    msg.id = "errorMsg";
    msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
    document.body.appendChild(msg);
    $("#code").css("display", "none")
    $("#copyright").css("position", "absolute");
    $("#copyright").css("bottom", "10px");
    document.execCommand("stop");
} else {
    setTimeout(function () {
        startHeartAnimation();
    }, 1000);

    timeElapse(together);
    setInterval(function () {
        timeElapse(together);
    }, 500);

    adjustCodePosition();
    $("#code").typewriter();
}


//音频的自动播放
document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
            audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay();
});

//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
document.addEventListener('touchstart', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
            audio.play();
    }
    audioAutoPlay();
});