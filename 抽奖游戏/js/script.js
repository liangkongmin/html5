var data = ['Phone7', 'Ipad', '三星笔记本', '佳能相机', '惠普打印机', '谢谢参与', '100元充值卡', '1000元超市购物券'],
    timer = null, //定时器
    flag = 0; //用于键盘事件状态标记

window.onload = function() {

    var play = document.getElementById('play'),
        stop = document.getElementById('stop');

    // 开始抽奖
    play.onclick = playFun;
    stop.onclick = stopFun;

    // 键盘事件
    document.onkeyup = function(event) {
        event = event || window.event;
		//回车键键码为13
        if (event.keyCode == 13) {
			//如果状态flag值为0则开始抽奖，并把状态值改为1，否则停止抽奖并把状态值改为0
            if (flag == 0) {
                playFun();
                flag = 1;
            } else {
                stopFun();
                flag = 0;
            }
        }
    }
}
// 开始抽奖
function playFun() {
    var title = document.getElementById('title');
    var play = document.getElementById('play');
    //每次都先清除上一次的定时器任务，避免抽奖效果累加频率会越来越快
    clearInterval(timer);
    timer = setInterval(function() {
		//获取奖品下标随机数
        var random = Math.floor(Math.random() * data.length);
		//显示随机的奖品名称
        title.innerHTML = data[random];
    }, 50);
    play.style.background = '#999';//改变开始按钮背景色
}
//停止抽奖
function stopFun() {
	//清除定时器即可结束抽奖
    clearInterval(timer);
    var play = document.getElementById('play');
	//改变停止按钮背景色
    play.style.background = '#036';
}