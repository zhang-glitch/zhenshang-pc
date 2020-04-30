 //获取当前有效样式浏览器兼容的写法
 function getStyle(node, cssStr){
    return node.currentStyle ? node.currentStyle[cssStr] : getComputedStyle(node)[cssStr];
}


function Move({node, target, speed, cssStr, callback}){
    // var timer;
    // 每次启动前都要删除上一次的定时器
    clearInterval(node.timer);
    // 获取当前有效样式
    var current = parseInt(getStyle(node, cssStr));
    // 判断速度的符号
    //current > target  speed = -speed;
    if(current > target){
        speed = -speed;
    }
    node.timer = setInterval(function(){
        var current = parseInt(getStyle(node, cssStr));
        var news = current + speed;
        
        // 让其准确的运动到目标位置   类似如拖拽的防止出界
        if((speed < 0 && news < target) || (speed > 0 && news >target)){
            news = target;
        }
        
        node.style[cssStr] = news + "px";
        if(news == target){
            clearInterval(node.timer);
            if(callback){
                callback();
            }
            
        }
    },30);
}
