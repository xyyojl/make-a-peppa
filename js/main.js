$('.mask button').on('click',function(){
    $('.mask').hide();
    let player = document.getElementById('player');
    player.load();
    player.play();
    let duration = 30;
    $('.actions').on('click','button',function(e){
        console.log(1)
        let $button = $(e.currentTarget);
        let speed = $button.attr('data-speed');
        // console.log(speed);
        $button.addClass('active').siblings('.active').removeClass('active');
        switch (speed) {
            case 'slow':
                duration = 50;
                break;
            case 'normal':
                duration = 30;
                break;
            case 'fast':
                duration = 10;
                break;
        }
    })
    function writeCode(prefix, code, fn) {
        let codeContainer = $('#code');
        let styleTag = $('#styleTag');
        let n = 0;
        let id = setTimeout(function run() {
            n += 1;
            codeContainer.html(Prism.highlight(prefix+code.substring(0,n), Prism.languages.css));
            styleTag.html(code.substring(0, n));
            // console.log(codeContainer[0].scrollHeight)
            codeContainer.scrollTop(codeContainer.prop("scrollHeight"));
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                window.clearTimeout(id)
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
/* 
* 小猪佩奇身上纹，掌声送给社会人
* 今天就用CSS画小猪佩奇，送给你啦
* 好，我的表演即将开始！你准备好了吗？go
*/

/*
* 有点单调，那就先来个背景吧
*/

.preview-wrapper .wrapper {
    background-color: #84CEF5;
}
/*
* 先画佩奇的头
*/

.face {
    border: 6px solid #ef96c2;
    background-color: #FFB3DA;
    border-radius: 220px 270px 260px 210px;
    transform: rotate(30deg);
}

.face::before { 
    border: 6px solid #ef96c2;
    border-radius:150% 61% 0% 80%
    /130% 6% 0% 68%;
    transform: rotate(-5deg);
    background-color: #FFB3DA;
}
.face::after {
    transform: rotate(-7deg);
    background-color: #FFB3DA;
}

/*
* 然后再画佩奇的大鼻子
*/

.nose {
    border-radius: 72%;
    border: 6px solid #ef96c2;
    background-color: #FFB3DA;
    transform: rotate(36deg);
}
.nostril.left {
    left: 4px;
    top: 22px;
}
.nostril.right {
    left: 20px;
    top: 14px;
}

/*
* 接着帮佩奇画上两个鼻孔吧
*/

.nostril {
    background: #DA6C9B;
    border-radius: 50%;
}

/*
* 画佩奇的耳朵
*/

.ear {
    border: 6px solid #ef96c2;
    background-color: #FFB3DA;
    border-radius: 50%
    / 35% 40% 50% 50%;
}

/*
* 把佩奇的耳朵放到正确的位置上
*/

.ear.left {
    right: 72px;
    top: -6px;
    transform: rotate(20deg);
}
.ear.right {
    right: 28px;
    top: 18px;
    transform: rotate(36deg);
}

/*
* 紧接着画佩奇的眼睛
*/
.eye {
    border: 6px solid #ef96c2;
    background-color: #fff;
    border-radius: 50%;
}

.eye::before {
    background-color: #000;
    border-radius: 50%;
}
.eye.left::before {
    left: -1px;
}
.eye.right {
    right: 85px;
    top: 53px;
}

/*
* 接着画一下佩奇的脸颊
*/

.cheek {
    background-color: #FF96CE;
    border-radius: 50%;
    transform: rotate(25deg);
}

/*
* 再接着画一下佩奇的嘴巴
*/

.mouth .mouth-bottom {
    border: 6px solid #d44b81;
    background-color: #000;
    border-radius: 50%
    /0 0 100% 100%;
}
.mouth .mouth-middle {
    border: 6px solid #d44b81;
    background-color: #ffb3da;
    border-radius:0% 0% 50% 50%
    / 0% 0% 100% 100%;
}
.mouth .mouth-middle::before {
    background-color: #FFB3DA;
    border-radius:0% 0% 50% 50%
    / 0% 0% 100% 100%;
}

/*
* 终于，可以画佩奇的身体啦
*/

.body {
    background-color: #EB5B50;
    border: 6px solid #E33B32;
    border-radius: 50%
    / 100% 100% 0% 0%;
}

/*
* 然后画佩奇的手
*/

.hand.left{
    background-color: #FFBADF;
    transform: rotate(-35deg);
}

/*
* 画佩奇的左手
*/

.hand.left::before {
    background-color: #ffbadf;
    transform: rotate(28deg);
}
.hand.left::after {
    border-radius:60% 59% 65% 90%
    / 100% 90% 89% 90%;
    transform: rotate(139deg);
    background-color: #ffbadf;
}

/*
* 画佩奇的右手
*/

.hand.right {
    transform: rotate(28deg);
    background-color: #FFBADF;  
}
.hand.right::before {
    background-color: #ffbadf;
    border-radius:60% 59% 65% 90%
    / 100% 90% 89% 90%;
    transform: rotate(-139deg);
}
.hand.right::after {
    background-color: #ffbadf;
    transform: rotate(-28deg);
}

/*
* 看我巧妙地画佩奇的尾巴
*/

.tail {
    background-color: transparent;
    border: 8px solid #FFBADF;
    border-radius: 50%;
}
.tail::before {
    background-color: #FFBADF;
    border-radius: 50%
    / 0% 0% 100% 100%;
    transform: rotate(-9deg);
}
.tail-circle {
    border: 8px solid #FFBADF;
    border-radius: 100% 0 0 100%
    /50%;
    transform: rotate(-102deg);
}
.tail-circle::after {
    background-color: #FFBADF;
    border-radius: 4px;
}

/*
* 画佩奇的脚
*/

.foot {
    background-color: #FFBADF;
    border-radius: 0 0 10% 0 
    / 0 0 10% 0;
}

/*
* 然后给佩奇穿鞋子
*/

.shoes {
    border-radius:58% 187% 180% 50%
    / 130% 123% 113% 100%;
    background-color: #000;
}

/*
*最后来个背影，完美
*/

.peppa-shadow {
    border-radius: 50%;
    background-color:rgba(0,0,0,.3);
}

/* 
* 好了，这只小猪佩奇送给你，喜欢吗？
* 小猪佩奇给大家贺新年,猪事顺利，猪笼入水!
* 重新修改时间：2019/2/28 
* 作者：区家乐
* 邮箱：m13631895256@163.com
* 仓库：https://github.com/xyyojl/make-a-peppa
*/    
    `
    writeCode('', code);
})
