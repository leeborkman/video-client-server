/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import filesize from 'filesize'

import config from 'react-global-configuration'
import ReactPlayer from 'react-player'
import getVideoList from '../model/getVideoList'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  grid: {
    width: '100%',
    margin: 'auto',
    marginTop: '2em'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main
  },
  filename: {
    color: '#f00',
    fontWeight: 'bold'
  },
  filesize: {
    color: '#00f'
  }
}))

export default function VideoGrid () {
  const classes = useStyles()
  const [files, setFiles] = useState([])

  useEffect(() => {
    getVideoList().then(data => {
      setFiles(data.files)
    })
  }, [])

  return (
    <div className={classes.root} data-testid='video-grid'>
      <Grid container justify='center' spacing={3} className={classes.grid} data-testid='grid-top'>
        {files
          .sort((a, b) => b.mtime.localeCompare(a.mtime))
          .map(file =>
            /^.+\.(avi|flv|wmv|mp4|mov|m4v)$/i.test(file.filename) ? (
              <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={file.filename} data-testid='grid-inner'>
                <Paper className={classes.paper} data-testid='paper'>
                  <ReactPlayer
                    url={`${config.get('videoServer')}/${file.filename}`}
                    width='100%'
                    height='100%'
                    controls
                    className='ReactPlayer'
                    data-testid='react-player'
                  />
                  <div className={classes.filename} data-testid='filename'>
                    {file.filename}
                  </div>
                  <div className={classes.filesize} data-testid='filesize'>
                    {filesize(file.size)}
                  </div>
                </Paper>
              </Grid>
            ) : (
              ''
            )
          )}
      </Grid>
    </div>
  )
}
