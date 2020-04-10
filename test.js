var crc64 = require('./')
var path = require('path')

var files = ['package.json', 'yarn.lock', 'README.md', 'node_modules']

var promises = files.map(file => {
  return crc64.crc64FileProcess(path.join(__dirname, file)).then(hash => {
    return `${file} hash: ${hash}`
  }).catch(err => {
    return `${file} crash: ${err.code}`
  })
})

Promise.all(promises).then(ret => {
  console.log(ret)
})
