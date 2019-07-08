/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import GetVideoList from '../model/GetVideoList'

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
  }
}))

export default function VideoGrid () {
  const classes = useStyles()
  const [files, setFiles] = useState([])

  useEffect(() => {
    GetVideoList(data => {
      setFiles(data.files)
    })
  },[])

  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={3} className={classes.grid}>
        {files.map((file) => (
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={file.filename}>
            <Paper className={classes.paper}>{file.filename}</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
