/**
 * Created by zhengzhaozhao on 2017/3/17.
 */

var n = 0,
  imgNum = $("img").length,
  img = $('img');
lazyload();


$(window).scroll(lazyload)

function lazyload(event) {
  for (var i = n;i<imgNum;i++){
    if(img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())){
      if(img.eq(i).attr("src") === "default.jpg"){
        var src = img.eq(i).attr("data-src");
        img.eq(i).attr("src", src);
  
        n = i + 1;
        
      }
    }
  }
}

//简单的节流函数
//fun 要执行的函数
//delay 延迟
//time 在time时间内必须执行一次
function throttle(fun,delay,time) {
  var timeout ,
    startTime = new Date();
  
  return function () {
    var context = this,
      args = arguments,
      curTime = new Date()
    
    clearTimeout(timeout)
    //如果达到了规定的触发时间间隔，触发 handler
    
    if(curTime - startTime >= time){
     fun.apply(context,args);
     startTime = curTime
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(fun,delay)
    }
  }
}


var num = document.getElementsByTagName('img').length;
var img = document.getElementsByTagName("img");
var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历

lazyload(); //页面载入完毕加载可是区域内的图片

window.onscroll = lazyload;

function lazyload() {
  var seeHeight = document.documentElement.clientHeight; //可见区域高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
  for (var i = n; i < num; i++) {
    if (img[i].offsetTop < seeHeight + scrollTop) {
      if (img[i].getAttribute("src") == "default.jpg") {
        img[i].src = img[i].getAttribute("data-src");
      }
      n = i + 1;
    }
  }
}


