import '@testing-library/jest-dom/extend-expect';
import setConfigs from '../config/config';
import getVideoList from './getVideoList';

setConfigs();

test('data.files is an array', done => {
  function callback (data) {
    if (Array.isArray(data.files)) {
      done();
    } else {
      done.fail('Was not an array');
    }
  }
  getVideoList(callback);
});

test('data.files has at least one element', done => {
  function callback (data) {
    if (data.files.length > 0) {
      done();
    } else {
      done.fail('Array was zero length');
    }
  }
  getVideoList(callback);
});
