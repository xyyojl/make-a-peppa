# 记：css绘制小猪佩奇的项目及踩过的坑

## 前言

为什么做这个项目：其实是因为今年是乙亥猪年，所以就想结合所学知识实践一下，所以想来想去，最终决定了画小猪佩奇给大家贺新年，小猪佩奇身上纹，掌声送给社会人。

下面是我项目的代码和预览链接，觉得项目好看又实用的小伙伴，随手给个star, 您的star是我最大的动力！！！<br>
[项目源码](https://github.com/xyyojl/make-a-peppa) [预览链接](https://xyyojl.github.io/make-a-peppa/index.html)

[移动端实现效果的展示](https://github.com/xyyojl/make-a-peppa/blob/master/peppa.mp4)，点击download下载观看

这一项目的主题的是画一只小猪佩奇给你贺新年，好了，废话不多说，我们进入正题：

## 一、项目制作思路

该项目支持PC端和移动端观看，PC端食用效果更佳，制作思路：

1. 使用`html、css`实现小猪佩奇的静态效果
2. 接着使用`jQuery、JavaScript`实现动态向`style`标签添加样式展示效果和向`pre` 标签添加文本，添加调速功能
3. 紧接着利用`prism.js`实现代码高亮
4. 在移动端上调整细节，实现在移动端上查看到效果
5. 实现动画模拟小猪佩奇`CSS`绘制过程
6. 添加背景音乐，通过一个小技巧实现背景音乐播放

技术栈：`jQuery、JavaScript、html5、CSS3`

注：主要使用到是css3的`border-radius，`曲线救国。

## 二、做这个项目遇到的问题

### 问题1：画小猪佩奇的展示过程时间太长了

解决办法：将不影响小猪佩奇在页面展示效果的样式，统统放到一个`css`文件，提前加载好部分样式，当页面输出文本的时候，展示关键的样式即可，这个问题就这样解决啦，还有的话，就是我发现在电脑上播放的时间的好像比手机上播放少和不同手机的播放时间是不一样的，这里就要吐槽一下自己的手机啦，手机播放所用的时间是太久了，手机使用时间长也就是这个样子啦！

### 问题2：如何实现点击按钮调整播放速度

解决办法：由于`setInterval`不能确保两次执行之间有固定的间隔，所以不用`setInterval`，而是每次执行结束后，使用`setTimeout`指定下一次执行的具体时间。

小demo：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <span id="text"></span>
  <script>
      /*var text = document.getElementById('text') 
        var i = 0;
        var id = setInterval(function(){
          i += 1;
          if(i < 10){
            text.innerText = i
          }else{
            clearInterval(id)
          }
        },500)*/
      
      // setTimeout 代替 setInterval
      var text = document.getElementById('text') 
        var i = 0;
        var id = setTimeout(function fn(){
          i += 1;
          if(i < 10){
            text.innerText = i
          }else{
            clearTimeout(id)
          }
          id = setTimeout(fn, 2000);
        },500)
  </script>
</body>
</html>
```

### 问题3：如何在页面播放背景音乐

其实嘛，这个坑是自己偏要去踩的，本来实现好整体功能之后，就该结束了，但是自己偏偏想要有一个背景音乐，那就去做吧，踩坑了，我发现不能在Chrome浏览器上自动播放，那怎么办？我能怎么办？去`Google`吧，我知道`Chrome 66`已经禁止声音自动播放，那电脑上的其他浏览器和手机上的浏览器也有可能会禁止声音自动播放，我思考出解决办法，那就是：
既然浏览器你不让我声音自动播放，那我**加一个引导用户点击的按钮**，如“开始”或者“开启音效”之类的，必须要让用户点一下，使得背景音乐播放了。

### 问题4：使用`jQuery`时，想要调用音乐的play()方法时，发现 `$(“#audio”).play();` 不起作用，并且报错 `play()`方法 `undefined`。

解决办法：

报错说明了这个`jQuery`对象没有这个`play`方法使用原生`document`方法即可调用

```js
var audio = document.getElementById('audio');
audio.play();
audio.stop();
```

## 三、如何使用这个项目

克隆项目到本地：

```
git clone git@github.com:xyyojl/make-a-peppa.git
```

进入项目：

```
cd make-a-peppa
```

然后启动`server`服务器，前提是你已经安装了`http-server`，其实启不启动服务器都不是很大问题。

```
http-server -c -1
```

然后就可以在浏览器地址栏里输入`localhost:8080`访问了。

## 四、参考文章

- [用CSS画小猪佩奇，你就是下一个社会人！](https://cloud.tencent.com/developer/article/1128472)
- [Chrome 66禁止声音自动播放之后](https://juejin.im/post/5af7129bf265da0b8262df4c)
- [初识移动端](https://yk1062008412.github.io/2018/05/24/%E5%88%9D%E8%AF%86%E7%A7%BB%E5%8A%A8%E7%AB%AF/)

本文为区家乐的原创文章，著作权归本人和饥人谷所有，转载务必注明来源
