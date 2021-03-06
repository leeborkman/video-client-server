/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import setConfigs from './config';
import VideoGrid from './view/VideoGrid';
import UploadForm from './view/UploadForm';

setConfigs();

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff'
  }
}));

function App () {
  const classes = useStyles();
  return (
    <HashRouter>
      <div className={`App ${classes.root}`}>
        <Route
          path='/'
          render={({ location }) => (
            <>
              <AppBar position='static' color='default'>
                <Toolbar>
                  <Typography variant='h6'>Video Tech Test - Lee Borkman</Typography>
                </Toolbar>
              </AppBar>

              <Tabs value={location.pathname} indicatorColor='secondary' variant='fullWidth'>
                <Tab label='Videos' value='/' component={Link} to='/' />
                <Tab label='Upload' value='/upload' component={Link} to='/upload' />
              </Tabs>

              <Switch>
                <Route exact path='/' component={VideoGrid} />
                <Route path='/upload' component={UploadForm} />
              </Switch>
            </>
          )}
        />
      </div>
    </HashRouter>
  );
}

export default App;
