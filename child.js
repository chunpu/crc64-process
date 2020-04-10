const crc64 = require('crc64-ecma182')

process.on('message', data => {
  if (data) {
    crc64.crc64File(data.filePath, function(error, hash) {
      var result = data
      if (error) {
        result.error = error
        result.success = false
      } else {
        result.success = true
        result.hash = hash
      }
      process.send(result)
    })
  }
})
