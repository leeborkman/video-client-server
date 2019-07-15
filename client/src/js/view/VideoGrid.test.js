import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import setConfigs from '../config/config';
import VideoGrid from './VideoGrid';

setConfigs();

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
