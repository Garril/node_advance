const dgram = require('node:dgram');
const { Buffer } = require('node:buffer');

const message = Buffer.from('Some bytes');
const message2 = Buffer.from('测试中文');
const client = dgram.createSocket('udp4');
/* client.send(message, 41234, 'localhost', (err) => {
  client.close();
}); */
client.send([message, message2, 'test'], 41234, 'localhost', (err) => {
  client.close();
});