/* 
  Buffer 
  1、大小在创建时就确定，无法更改
  2、全局下,无需引入
*/
// 0x1填充buff，长度为10
const buf1 = Buffer.alloc(10, 1);
// 长度为3，内容1,2,3
const buf2 = Buffer.from([1, 2, 3]);
// 同理字符串,UTF-8字节 [0x74,0xc3,....];
const buf3 = Buffer.from('test');
// 除了utf-8，还有Latin-1字节等其他特殊编码

/* 
ASCII 和 Unicode
  ASCII 
  如果全英，ASCII 128个字符足够，用 7bit可以存储，
  但计算机以 字节 Byte作为单位，为了操作方便，
  我们用 8bit 也就 1Byte 来存储 ASCII
  （虽然费一个bit，但是读写效率高）
  
  Unicode
  有其他国家语言，包含上百万字符，位置靠前可以一个字节存储
  靠后可能需要3个字节存储。所以，所有字符都占 3个字节的内存。

  那么用哪种，内存和效率的选择
  如果1字节可以表达的东西，用Unicode，就占3字节，
  3个字节，又可能太占。如何优化？

  UTF-8（兼容ASCII）
  如果只有一个字节，最高的比特位为0，如果有多个字节
  第一个字节从最高位开始，连续有几个比特位的值为1，就用几个字节编码
  剩下的以10开头
  eg： 
    单字节  0xxxxxxx
    双字节  110xxxxx 10xxxxxx
    三字节  1110xxxx 10xxxxxx 10xxxxxx
    四字节  11110xxx 10xxxxxx 10xxxxxx 10xxxxxx


=====================================================
*/

/* 二进制数据，由三类对象组成 
  ArrayBuffer对象： 原始的二进制数据。 --- 无法进行读写
  TypedArray视图：读写简单的二进制数据。 --- 可以进行读写
      （Uint8Array、Int8Array、Int16Array、Float32Array....）
  DataView视图：读写复杂类型的二进制数据。
*/
function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); // 每个字符占2个字节
  var bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return bufView;
}
/* Buffer实例 是 Uint8Array实例，都是TypedArray
  但与TypedArray有微小不同 
  比如 ArrayBuffer.slice() -- 拷贝
      Buffer.slice() --- 拷贝/创建新实例
  注意：
    new Uint32Array(Buffer.from([1,2,3,4]))
    Buffer对象的内存是被拷贝到TypedArray，而不是共享
*/
const arr = new Uint16Array(2);
arr[0] = 100; arr[1] = 200;
// 拷贝 arr 内容
const buffa = Buffer.from(arr);
// 与 arr共享内存
const buffb = Buffer.from(arr.buffer);

/* 
=========================================================
与迭代器
*/
const iterateBuf = Buffer.from([1, 2, 3]);
for (let b of iterateBuf) {
  console.log(b);
}
// 1
// 2
// 3