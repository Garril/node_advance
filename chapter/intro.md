# intro of node

<hr/>

## 对比浏览器

因为 Node.js 不是浏览器，所以它不具有浏览器提供的 DOM API，比如：

```css
Window 对象、Location 对象、Document 对象、HTMLElement 对象、Cookie 对象
```

但是，Node.js 提供了自己特有的 API，比如：

```css
全局的 global 对象，也提供了当前进程信息的 Process 对象，操作文件的 fs 模块，以及创建 Web 服务的 http 模块
```

一些对象是 Node.js 和浏览器共有的，如

```css
 JavaScript 引擎的内置对象，它们由 V8 引擎提供。常见的还有：
- 基本的常量 undefined、null、NaN、Infinity；
- 内置对象 Boolean、Number、String、Object、Symbol、Function、Array、Regexp、Set、Map、Promise、Proxy；
- 全局函数 eval、encodeURIComponent、decodeURIComponent等等。
```

此外，还有一些方法不属于引擎内置 API，但是两者都能实现，比如

```css
 setTimeout、setInterval 方法，Console 对象等等。
```

![image-20230726010824569](https://forupload.oss-cn-guangzhou.aliyuncs.com/imgs/image-20230726010824569.png)

其余的部分，看掘金里的笔记去。