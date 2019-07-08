/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import setConfigs from './config/config'
import VideoGrid from './view/VideoGrid'
import UploadForm from './view/UploadForm'

setConfigs()

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff'
  }
}))

function App () {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={`App ${classes.root}`}>
        <Route
          path='/'
          render={({ location }) => (
            <React.Fragment>
              <AppBar position='static' color='default'>
                <Toolbar>
                  <Typography variant='h6' color='inherit'>
                    Video Tech Test - Lee Borkman
                  </Typography>
                </Toolbar>
              </AppBar>
              <Tabs value={location.pathname} indicatorColor='primary' textColor='primary' variant='fullWidth'>
                <Tab label='Videos' value='/' component={Link} to='/' />
                <Tab label='Upload' value='/form' component={Link} to='/form' />
              </Tabs>
              <Switch>
                <Route exact path='/' component={VideoGrid} />
                <Route path='/form' component={UploadForm} />
              </Switch>
            </React.Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
