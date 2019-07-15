import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import setConfigs from '../config/config';
import VideoGrid from './VideoGrid';

setConfigs();

describe('VideGrid tests', () => {

  it('renders the top-level VideoGrid element', () => {
    const wrapper = shallow(<VideoGrid />);
    console.log("WRAPPER", wrapper.debug())  

    expect(wrapper.find('.VideoGrid').length).toBeGreaterThan(0)
  });

  it('renders the top-level VideoGrid element', () => {
    const wrapper = mount(<VideoGrid />);
    console.log("WRAPPER", wrapper.debug())  

    expect(wrapper.find('Paper').length).toBeGreaterThan(0)
  });


});





