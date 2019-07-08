/* eslint-disable react/jsx-filename-extension */
import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import setConfigs from './config/config'
import VideoGrid from './view/VideoGrid'

setConfigs()

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light
  }
}))

function App () {
  const classes = useStyles()
  return (
    <div className={`App ${classes.root}`}>
      <VideoGrid />
    </div>
  )
}

export default App
