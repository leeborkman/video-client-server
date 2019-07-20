import React from 'react'

import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import setConfigs from '../config'

import VideoGrid from './VideoGrid'

afterEach(cleanup)

jest.mock('../model/getVideoList')

setConfigs()

test('loads and displays one VideoGrid', async () => {
  const { getByText, getByTestId, queryAllByTestId, container, asFragment } = render(<VideoGrid />)
  const videoGridNode = await waitForElement(() => getByTestId('video-grid'))
  expect(queryAllByTestId('video-grid')).toHaveLength(1)
})

test('displays at least one ReactPlayer', async () => {
  const { getByText, getByTestId, queryAllByTestId, container, asFragment } = render(<VideoGrid />)
  const videoGridNode = await waitForElement(() => getByTestId('video-grid'))
  expect(queryAllByTestId('react-player').length).toBeGreaterThan(0)
})

test('displays exactly TWO ReactPlayers, ignoring the non-video file', async () => {
  const { getByText, getByTestId, queryAllByTestId, container, asFragment } = render(<VideoGrid />)
  const videoGridNode = await waitForElement(() => getByTestId('video-grid'))
  expect(queryAllByTestId('react-player')).toHaveLength(2)
})
