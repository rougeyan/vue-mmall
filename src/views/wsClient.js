/**
 * 背景:  java服务端采用的是基于tomcat的标准websocket
 * 尝试采用socket.js / socket.io的库来实现封装,
 * 但是socket.io并非标准的websocket协议; 还涉及http长轮询等;
 * 
 * 参考:
 * [tomcat 7下spring 4.x mvc集成websocket以及sockjs完全参考指南（含nginx/https支持）](https://www.cnblogs.com/zhjh256/p/6052102.html)
 * 
 */
export default function standardWebSocketClientGenerator(url,opts){
    const wsPath = url || "ws://localhost:8081/ws/?id=10087";
    
    let sockets = new WebSocket(wsPath);
    sockets.onopen = function (evt) {
      console.log(`[client:::]建立连接中......`);
    };
    sockets.onmessage = function (evt) {
        var message = JSON.parse(evt.data); //将数据解析成JSON形式
        console.log(evt.data); //展示消息
        console.log(sockets);
        // console.log(evt)
    };
    sockets.onerror = function (evt) {
        console.log("产生异常");
    };
    sockets.onclose = function (evt) {
        console.log("已经关闭连接");
    };
}