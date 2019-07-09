const getFiles = require('./getFiles');

function isDate (string) {
  const d = new Date(string)
  return d.toString() !== 'Invalid Date'
}

test('Returns an array', done => {
  function callback (data) {
    if (Array.isArray(data)) {
      done()
    } else {
      done.fail('Was not an array')
    }
  }
  getFiles(callback)
})

test('Each file in array has integer size', done => {
  function callback (data) {
    let pass = false
    if (Array.isArray(data)) {
      pass = true
      data.forEach((item) => {
        pass = pass && Number.isInteger(item.size)
      })
    }
    if (pass) {
      done()
    } else {
      done.fail('Sizes were not integer')
    }
  }
  getFiles(callback)
})

test('Each file in array has mtime in date format', done => {
  function callback (data) {
    let pass = false
    if (Array.isArray(data)) {
      pass = true
      data.forEach((item) => {
        pass = pass && isDate(item.mtime)
      })
    }
    if (pass) {
      done()
    } else {
      done.fail('mtimes were not valid dates')
    }
  }
  getFiles(callback)
})
