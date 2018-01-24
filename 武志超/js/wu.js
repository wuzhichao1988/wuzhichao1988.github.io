

// 音乐控制
// 抓元素
var music = document.getElementById("music");
// var mis1 = music.getElementsByClassName('mis1')[0];
var mis = music.getElementsByClassName('mis')[0];
var aud = music.getElementsByClassName('aud')[0];
// d定义音乐的状态变量
var music_sta = 1;
//  onclick 移动点击
music.onclick = function(){
    if(music_sta == 1){
        // 让背景gif隐藏
        mis1.style.display = 'none';
        // 停止音乐图片旋转
        mis.style.animation = 'none';
        // 停掉音乐
        aud.pause();
        music_sta = 2;
    }else if (music_sta == 2) {
        mis1.style.display = 'block';
        mis.style.animation = 'music 3s linear infinite';
        aud.play();
        music_sta = 1;
    }
}
// 音乐控制结束