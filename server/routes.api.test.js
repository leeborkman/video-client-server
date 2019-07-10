const request = require('supertest');
const app = require('./index');

jest.setTimeout(30000);

test('API returns application/json data', done => {
  request(app)
    .get('/api')
    .expect('Content-Type', /application\/json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        throw err;
      }
      console.log('RESPONSE', res.text);
      done();
    })
})

test('json data contains files array', done => {
  request(app)
    .get('/api')
    .expect('Content-Type', /application\/json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        throw err;
      }
      const data = JSON.parse(res.text);
      if (Array.isArray(data.files)) {
        done();
      } else {
        done.fail('Not an array');
      }
    })
})

test('Returned files are all video files', done => {
  request(app)
    .get('/api')
    .expect('Content-Type', /application\/json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        throw err;
      }
      const data = JSON.parse(res.text);
      let pass = false;
      if (Array.isArray(data.files)) {
        pass = true;
        data.files.forEach((item) => {
          pass = pass && isVideo(item.filename);
        })
      }
      if (pass) {
        done();
      } else {
        done.fail('Some files were not video');
      }
    })
})

function isVideo(filename) {
  if  (/^.+\.(avi|flv|wmv|mp4|mov|m4v)$/i.test(filename)) {
    return true;
  } else {
    console.log('File is not one of the allowed video extensions:', filename);
    return false;
  }
}

