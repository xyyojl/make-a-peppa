! function () {
    let duration = 30;
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget);
        let speed = $button.attr('data-speed');
        console.log(speed);
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
        /* let codeContainer = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag'); */
        let n = 0;
        let id = setTimeout(function run() {
            n += 1;
            /* codeContainer.innerHTML = code.substring(0,n);
            styleTag.innerHTML = code.substring(0,n);
            codeContainer.scrollTop = codeContainer.scrollHeight; */
            codeContainer.html(Prism.highlight(prefix+code.substring(0,n), Prism.languages.css));
            styleTag.html(code.substring(0, n));
            // codeContainer.scrollTop = codeContainer.scrollHeight;
            // codeContainer.prop("scrollHeight")
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #84CEF5;
    z-index: -3;
}

.peppa-container {
    position: relative;
    width: 300px;
    height: 460px;
}

.peppa-container .peppa-head>div {
    position: absolute;
}

.peppa-head {
    position: relative;
    width: 250px;
    height: 252px;
    left: 24px;
}

/*
* 先画佩奇的头
*/
.face {
    right: 0;
    top: 50px;
    width: 187px;
    height: 206px;
    border: 6px solid #ef96c2;
    background-color: #FFB3DA;
    border-radius: 220px 270px 260px 210px;
    transform: rotate(30deg);
}

.face::before {
    content: '';
    position: absolute;
    top: 1px;
    left: -94px;
    width: 180px;
    height: 100px;
    border: 6px solid #ef96c2;
    background-color: #FFB3DA;
    border-radius: 150% 61% 0% 80%/130% 6% 0% 68%;
    transform: rotate(-5deg);
}

.face::after {
    content: '';
    position: absolute;
    left: -2px;
    top: 6px;
    width: 102px;
    height: 110px;
    background-color: #FFB3DA;
    transform: rotate(-7deg);
}

/*
* 然后再画佩奇的大鼻子
*/
.nose {
    right: 190px;
    top: 20px;
    width: 51px;
    height: 70px;
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
    position: absolute;
    width: 12px;
    height: 12px;
    background: #DA6C9B;
    border-radius: 50%;
}


/*
* 画佩奇的耳朵
*/

.ear {
    width: 36px;
    height: 64px;
    border: 6px solid #ef96c2;
    background-color: #FFB3DA;
    border-radius: 50% 50% 50% 50%/ 35% 40% 50% 50%;
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
    right: 120px;
    top: 36px;
    width: 34px;
    height: 34px;
    border: 6px solid #ef96c2;
    background-color: #fff;
    border-radius: 50%;
}

.eye::before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 12px;
    height: 12px;
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
    right: 20px;
    top: 114px;
    width: 49px;
    height: 59px;
    background-color: #FF96CE;
    border-radius: 50%;
    transform: rotate(25deg);
}

/*
* 再接着画一下佩奇的嘴巴
*/
.mouth {
    width: 97px;
    right: 73px;
    top: 152px;
    transform: rotate(18deg);
}

.mouth>div {
    position: absolute;
    left: 0;
    top: 0;
}

.mouth .mouth-bottom {
    width: 97px;
    height: 45px;
    border: 6px solid #d44b81;
    background-color: #000;
    border-radius: 50%/0 0 100% 100%;
}

.mouth .mouth-middle {
    width: 97px;
    height: 27px;
    border: 6px solid #d44b81;
    background-color: #ffb3da;
    border-radius: 0% 0% 50% 50%/ 0% 0% 100% 100%;
}

.mouth .mouth-middle::before {
    content: '';
    position: absolute;
    left: -7px;
    top: -7px;
    width: 97px;
    height: 15px;
    background-color: #FFB3DA;
    border-radius: 0% 0% 50% 50%/ 0% 0% 100% 100%;
}

.peppa-body {
    position: relative;
}

.peppa-body>div {
    position: absolute;
}

/*
* 终于，可以画佩奇的身体啦
*/
.body {
    margin-left: 58px;
    width: 227px;
    height: 209px;
    background-color: #EB5B50;
    border: 6px solid #E33B32;
    border-radius: 50%/ 100% 100% 0% 0%;
    z-index: -1;
    top: -85px;
}

/*
* 然后画佩奇的手
*/

.hand.left{
    width: 78px;
    height: 12px;
    border-radius: 100% 100% 100% 17%/ 100% 90% 16% 90%;
    background-color: #FFBADF;

}

/*
* 画佩奇的左手
*/

.hand.left {
    left: 10px;
    top: 20px;
    transform: rotate(-35deg);
    z-index: -2;
}
.hand.left::before,
.hand.left::after{
    content: '';
    position: absolute;
    background-color: #ffbadf;
}

.hand.left::before {
    
    width: 28px;
    height: 9px;
    top: -8px;
    left: 8px;
    border-radius: 100% 100% 100% 35%/ 100% 90% 16% 90%;
    background-color: #ffbadf;
    transform: rotate(28deg);
}

.hand.left::after {
    right: 46px;
    top: 8px;
    width: 20px;
    height: 9px;
    border-radius: 60% 59% 65% 90%/ 100% 90% 89% 90%;
    transform: rotate(139deg);
}

/*
* 画佩奇的右手
*/

.hand.right {
    width: 78px;
    height: 12px;
    border-radius: 100% 100% 15% 17%/ 99% 92% 90% 90%;
    right: -32px;
    transform: rotate(28deg);
    background-color: #FFBADF;  
}
.hand.right::before,
.hand.right::after{
    content: '';
    position: absolute;
    background-color: #ffbadf;
}
.hand.right::before {
    
    right: 10px;
    top: 10px;
    width: 20px;
    height: 9px;
    border-radius: 60% 59% 65% 90%/ 100% 90% 89% 90%;
    transform: rotate(-139deg);
}

.hand.right::after {
    width: 28px;
    height: 9px;
    top: -8px;
    right: 5px;
    border-radius: 100% 100% 100% 35%/ 100% 90% 16% 90%;
    transform: rotate(-28deg);
}

/*
* 看我巧妙地画佩奇的尾巴
*/

.tail {
    box-sizing: content-box;
    top: 54px;
    right: -15px;
    width: 7px;
    height: 11px;
    background-color: transparent;
    border: 8px solid #FFBADF;
    border-radius: 50%;
    z-index: -2;
}

.tail::before {
    content: '';
    position: absolute;
    left: -18px;
    bottom: -12px;
    width: 26px;
    height: 8px;
    background-color: #FFBADF;
    border-radius: 50%/ 0% 0% 100% 100%;
    transform: rotate(-9deg);
}

.tail-circle {
    box-sizing: content-box;
    position: absolute;
    right: -13px;
    bottom: -18px;
    width: 10px;
    height: 20px;
    border: 8px solid #FFBADF;
    border-right: none;
    border-radius: 100% 0 0 100%/50%;
    transform: rotate(-102deg);
}

.tail-circle::after {
    content: '';
    position: absolute;
    right: -2px;
    top: 20px;
    width: 8px;
    height: 8px;
    background-color: #FFBADF;
    border-radius: 4px;
}

.peppa-footer {
    position: absolute;
    top: 376px;
}

.peppa-footer>div {
    position: absolute;
}

/*
* 画佩奇的脚
*/

.foot.left {
    left: 125px;
}

.foot.right {
    left: 218px;
}

.foot {
    top: 0;
    width: 11px;
    height: 52px;
    background-color: #FFBADF;
    border-radius: 0 0 10% 0 / 0 0 10% 0;
}

/*
* 然后给佩奇穿鞋子
*/

.shoes.left {
    left: 90px;
}

.shoes.right {
    left: 182px;
}

.shoes {
    top: 40px;
    width: 51px;
    height: 14px;
    border-radius: 58% 187% 180% 50%/ 130% 123% 113% 100%;
    background-color: #000;
}

/*
*最后来个背影，完美
*/
.peppa-shadow {
    left: 52px;
    top: 20px;
    width: 240px;
    height: 47px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .3);
    z-index: -1;
}

/* 
* 好了，这只小猪佩奇送给你，喜欢吗？
* 小猪佩奇给大家贺新年,猪事顺利，猪笼入水!!!
*/    
    `
    writeCode('', code);
}()