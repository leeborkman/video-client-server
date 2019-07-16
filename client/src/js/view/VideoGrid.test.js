import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from '../../enzyme';

import setConfigs from '../config';

jest.mock('../model/getVideoList');
import getVideoList from '../model/getVideoList';

import VideoGrid from './VideoGrid';

setConfigs();

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}


describe('VideoGrid tests', () => {
  it('renders the top-level VideoGrid element', () => {
    const wrapper = shallow(<VideoGrid />);
    expect(wrapper.find('.VideoGrid').length).toBeGreaterThan(0);
  });

  it('renders lower-level ReactPlayer element', () => {
    const wrapper = mount(<VideoGrid />);
    return flushPromises().then(() => {
      wrapper.update();
      expect(wrapper.find('ReactPlayer').length).toBeGreaterThan(0);
    });
  });

  it('rejects the non-video file, and renders only two FilePlayer elements', async () => {
    const wrapper = mount(<VideoGrid />);
    return flushPromises().then(() => {
      wrapper.update();
      expect(wrapper.find('ReactPlayer')).toHaveLength(2);
    });
  });

});
