var drop = require('./')

drop(function(err, data) {
  console.log('first file dropped on page as a Buffer:', data)
})
