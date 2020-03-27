const child = require('child_process')
const path = require('path')

function crc64FileProcess(filePath, fn) {
  var scirptPath = path.join(__dirname, 'child.js')
  var forked = child.fork(scirptPath, [filePath])
  return new Promise(function(resolve, reject) {
    forked.on('message', function(data) {
      if (data.error) {
        reject(data.error)
      } else {
        resolve(data.data)
      }
    })
  })
}

module.exports = { crc64FileProcess: crc64FileProcess }
