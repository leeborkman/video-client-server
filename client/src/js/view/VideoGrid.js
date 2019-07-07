/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'

import GetVideoList from '../model/GetVideoList'

export default class VideoGrid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: { files: [] }
    }
  }

  componentDidMount () {
    GetVideoList(data => {
      this.setState({ data: data })
    })
  }

  render () {
    return (
      <div>
        <Grid container spacing={3}>
          {this.state.data.files.map((file, i) => (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={i}>
              <Card>{file.filename}</Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}
