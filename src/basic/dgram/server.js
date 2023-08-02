/* 
  dgram (数据报)
  dgram 模块提供了 UDP数据包socket的实现
*/
const dgram = require('dgram')
const server = dgram.createSocket('udp4')
server.on('error', err => {
  console.log('server abnormal')
  server.close()
})
server.on('message', (msg, info) => {
  // 直接clg，输出 <Buffer 53 6f 6d 65 20 62 79 74 65 73 e6 b5 8b e8 af 95 e4 b8 ad e6 96 87 74 65 73 74> info:  { address: '127.0.0.1', family: 'IPv4', port: 56713, size: 26 }
  console.log('server receive info---', "msg: ", msg, "info: ", info)
  // 模板字符串 template string: msg --- Some bytes测试中文test -- info ---  [object Object]
  console.log(`template string: msg --- ${msg} -- info ---  ${info}`)
})
server.on('listening', () => {
  const address = server.address();
  console.log("server listening", address);
})
// server listen port 41234 -- 0.0.0.0:41234
server.bind(41234);
