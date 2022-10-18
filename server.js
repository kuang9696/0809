const { urlencoded } = require('express');
const express = require('express');

const app = express();
// 使用中间件解析urlencoded编码形式的请求体参数
// app.use(express.urlencoded({extended:true}));
// 使用中间件解析json编码形式的请求体参数
app.use(express.json());

// 暴露静态资源
app.use(express.static(__dirname+'/src'));

// 响应GET请求，可以接收query参数
app.get('/test_get',(request,response) => {
    console.log('有人请求test_get了--携带的query参数是:',request.query);
    response.send('hello test_get~~~');
})

// 响应GET请求，可以接收query参数
app.get('/test_get2/:name/:age',(request,response) => {
    console.log('有人请求test_get2了--携带的params参数是:',request.params);
    response.send('hello test_get2~~~');
})

// 响应POST请求，可以接收请求体参数
app.post('/test_post',(request,response) => {
    console.log('有人请求test_post了--携带的请求体参数是:',request.body);
    response.send('hello test_post~~~');
})



app.listen(8080,(err) => {
    if(!err){
        console.log('测试ajax请求的服务器开启成功了!测试地址如下:');
        console.log('http://127.0.0.1:8080/1-ajax小试牛刀.html');
        console.log('http://127.0.0.1:8080/2-xhr的5种状态.html');
        console.log('http://127.0.0.1:8080/3-ajax_get请求.html');
        console.log('http://127.0.0.1:8080/4-ajax_post请求.html');
    }
})