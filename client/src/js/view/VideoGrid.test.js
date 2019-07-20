import React from 'react'

import { render, fireEvent, cleanup, waitForElement, wait, act } from '@testing-library/react'
//import { act } from 'react-dom/test-utils';

import '@testing-library/jest-dom/extend-expect'

import setConfigs from '../config'

import VideoGrid from './VideoGrid'

afterEach(cleanup)

jest.mock('../model/getVideoList')

// WORKAROUND TO SILENCE WARNINGS ABOUT WRAPPING IN ACT() - USE WITH CAUTION
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});
afterAll(() => {
  console.error = originalError;
});


setConfigs()

test('loads and displays one VideoGrid', async () => {
  act(() => { 
  const { getByText, getByTestId, queryAllByTestId, container, asFragment } = render(<VideoGrid />)
  const videoGridNode = getByTestId('video-grid')
  expect(queryAllByTestId('video-grid')).toHaveLength(1)
  })
})

test('displays at least one ReactPlayer', async () => {
  const { getByText, getByTestId, queryAllByTestId, container, asFragment } = render(<VideoGrid />)
  const videoGridNode =  await waitForElement(() => getByTestId('video-grid'))
  expect(queryAllByTestId('react-player').length).toBeGreaterThan(0)
})

test('displays exactly TWO ReactPlayers, ignoring the non-video file', async () => {
  const { getByText, getByTestId, queryAllByTestId, container, asFragment } = render(<VideoGrid />)
  const videoGridNode = await waitForElement(() => getByTestId('video-grid'))
  expect(queryAllByTestId('react-player')).toHaveLength(2)
})
