var crc64 = require('./')
var path = require('path')
const rawCrc64 = require('crc64-ecma182')

async function test() {
  console.time('test')
  for (var i = 0; i < 10000; i++) {
    var a = await crc64.crc64FileProcess(path.join(__dirname, 'package.json'))
  }
  console.timeEnd('test')
}

async function rawTest() {
  console.time('rawTest')
  for (var i = 0; i < 10000; i++) {
    var a = await crc64.crc64File(path.join(__dirname, 'package.json'))
  }
  console.timeEnd('rawTest')
}

test()
rawTest()
