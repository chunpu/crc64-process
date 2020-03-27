# crc64-process

Calc crc64 by fork child process

## Installation

```sh
$ npm install crc64-process --save
```

## Api

```js
const crc64 = require('crc64-process')

crc64.crc64FileProcess('your/file/path.ext').then(hash => {
  console.log(`hash: ${hash`)
})
```

## License

MIT
