import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UploadForm from './UploadForm';
import setConfigs from '../config/config';

setConfigs();

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UploadForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains expected text', () => {
  const { getByText } = render(<UploadForm />);
  expect(getByText('Drop a file to upload a video (or click on the button)')).toBeInTheDocument();
});
