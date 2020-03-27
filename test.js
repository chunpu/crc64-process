var crc64 = require('./')
var path = require('path')

crc64.crc64FileProcess(path.join(__dirname, 'package.json')).then(function(hash) {
  console.log(`hash: ${hash}`)
})
