import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import setConfigs from '../config/config';
import VideoGrid from './VideoGrid';

setConfigs();

const testFiles = [
  { 'filename': 'dummy2.md', 'size': 52, 'mtime': '2019-07-07T10:20:08.000Z' },
  { 'filename': 'small.mp4', 'size': 383631, 'mtime': '2019-07-09T03:30:50.927Z' },
  { 'filename': 'small2.mp4', 'size': 383631, 'mtime': '2019-07-09T06:02:00.957Z' }
];

const noTestFiles = [];

describe('VideoGrid tests', () => {
  it('renders the top-level VideoGrid element', () => {
    const wrapper = shallow(<VideoGrid isTest testFiles={testFiles} />);
    expect(wrapper.find('.VideoGrid').length).toBeGreaterThan(0);
  });

  it('renders lower-level ReactPlayer element', () => {
    const wrapper = shallow(<VideoGrid isTest testFiles={testFiles} />);
    expect(wrapper.find('ReactPlayer').length).toBeGreaterThan(0);
  });

  it('renders NO lower-level ReactPlayer elements when there are no files', () => {
    const wrapper = shallow(<VideoGrid isTest testFiles={noTestFiles} />);
    expect(wrapper.find('ReactPlayer').length).toBe(0);
  });

  it('rejects the non-video file, and renders only two FilePlayer elements', () => {
    const wrapper = shallow(<VideoGrid isTest testFiles={testFiles} />);
    console.log('WRAPPER', wrapper.debug())
    expect(wrapper.find('ReactPlayer')).toHaveLength(2);
  });
});
