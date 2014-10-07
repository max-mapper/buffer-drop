var drop = require('drag-and-drop-files')
var concat = require('concat-stream')
var createReadStream = require('filereader-stream')

module.exports = function(container, cb) {
  if (typeof container === 'function') {
    cb = container
    container = document.body
  }
  drop(container, function(files) {
    var first = files[0]
    var reader = createReadStream(first)
    reader.pipe(concat(function(contents) {
      cb(null, new Buffer(contents))
    }))
    reader.on('error', cb)
  })
}
