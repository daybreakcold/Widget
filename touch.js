
var touch = {};
$dailogContent.on('touchstart',function (event) {
  //起点的Y值
  touches.startY = event.targetTouches[0].pageY;
  //起点距顶部距离
  touches.current = $content[0].scrollTop;
  //开始的毫秒数
  touches.startTime = new Date().getTime();
  
  
}).on('touchmove',function (event) {
  //跟手滚动
  
  $content[0].scrollTop = (touches.startY - event.targetTouches[0].pageY) + touches.current;
}).on('touchend',function (event) {
  // 手指离开后，模拟缓动
  var endTime = new Date().getTime(),
    endPos = changedTouches[0].pageY,
    ratio = (endPos - touches.startY) / (endTime - touches.startTime),
    slowmoving = ratio * 180,
    curPos = $content[0].scrollTop;
  
  if (Math.abs(ratio) > 0.5){
    animation(400, function(process){
      $content[0].scrollTop = curPos - slowmoving * process;
    });
  }
})
