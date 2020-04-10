const child = require('child_process')
const path = require('path')
const crc64 = require('crc64-ecma182')
const shortid = require('shortid')
const EventEmitter = require('events')
const eventHub = new EventEmitter()
const scriptPath = path.join(__dirname, 'child.js')
const forked = child.fork(scriptPath)

forked.on('message', data => {
  if (data && data.eventId) {
    eventHub.emit(`channel:${data.eventId}`, data)
  }
})

function crc64FileProcess(filePath) {
  return new Promise(function(resolve, reject) {
    const eventId = shortid.generate()
    eventHub.once(`channel:${eventId}`, data => {
      if (data.success) {
        resolve(data.hash)
      } else {
        reject(data.error)
      }
    })
    forked.send({
      filePath,
      eventId
    })
  })
}

function crc64File(filePath) {
  return new Promise(function(resolve, reject) {
    crc64.crc64File(filePath, function(err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = { crc64FileProcess: crc64FileProcess, crc64File: crc64File }
