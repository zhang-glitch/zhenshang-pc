
//设置轮播图
        
    window.onload = function(){
        var oDiv = document.getElementById("box");
        var oUl = document.getElementById("ul");
        var imgArr = oUl.getElementsByTagName("img");
        var oNavDiv = document.getElementById("navDiv");
        var aArr = oNavDiv.getElementsByTagName("a");
        // 声明一个全局变量timer  用于关闭  定时器
        var timer = null;
        // 创建一个函数，用来开启自动切换
        function autoChange(){
            //开启一个定时器，来自动切换图片
            timer = setInterval(function(){
                index++;
                //判断index的值
                index %= imgArr.length;
                Move({
                    node: oUl,
                    speed: 500,
                    cssStr: "left",
                    target: -720 * index,
                    // 动画执行完后  修改导航点
                    callback: function(){
                            // 再开一个定时器  让链接点跳的比图片换的快一些   这种方法不可取
                            //     setInterval(function(){
                            //         setA();
                                
                            //    },2800) 
                            setA();                             
                    }
                })
            },4000);
        }
        // 动态设置ul的宽度
        oUl.style.width = 720 * imgArr.length + "px";
        // 设置index索引
        var index = 0;
        aArr[index].style.backgroundColor = "#ffffff";
        for(var i = 0; i < aArr.length; i++){
            // 为每一个超链接添加ind属性
            aArr[i].ind = i;
            // 添加鼠标移入事件
            aArr[i].onmouseover = function(){
                //当鼠标移入时  就关闭自动切换
                clearInterval(timer);
                // 获取点击超链接的索引
                index = this.ind; 
                // aArr[index].style.backgroundColor = "#ffffff";
                setA();
                // 切换图片   
                // 第一张   索引  0   移动  0
                // 第二张   索引  1   移动  -720
                // 。。。。。。。
                // oUl.style.left = -720 * index + "px";
               

                // 利用move函数来使图片运动
                Move({
                        node: oUl,
                        target: -720 * index,
                        speed: 1000,
                        cssStr: "left",
                        callback: function(){
                            //开启下一次的动画
                            autoChange();
                        }
                    });
            }
        }
        // 动用动画
                // setInterval(function(){
                //     Move({
                //         node: oUl,
                //         target: -720 * index,
                //         speed: 20,
                //         cssStr: "left",
                //         callback: function(){
                //             // setA(); 
                //             if(oUl.offsetLeft <= -oUl.offsetWidth){
                //                 oUl.style.left = 0;
                //             }
                //         }
                //     });
                // },3000);
                
        // 开启自动切换图片
        
        autoChange();
         //设置函数   当鼠标移入时  改变a的背景颜色
        function setA(){
            
            // 判断当前索引是否为最后一张图片
                if(index >= imgArr.length - 1){
                    index = 0;
                    oUl.style.left = 0;
                }
            //  给每次点击之前的超连接背景还原
            for(var i = 0; i < aArr.length; i++){
                
                // 如果上面的点击事件是click  那么就讲改值设为空  来让鼠标移入也有样式
                aArr[i].style.backgroundColor = "#6f6f70";
            }
            // 将选中的a变成白色
                aArr[index].style.backgroundColor = "#ffffff";
        }
        
    }   
