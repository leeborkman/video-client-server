import React, { useState } from 'react';
import Dropzone from 'react-dropzone-uploader';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import config from 'react-global-configuration';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '2em auto 2em auto',
    marginBottom: '4em',
    padding: theme.spacing(2),
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.light
  },
  dropzone: {
    border: '1px solid black',
    width: '90%',
    margin: '2em auto 2em auto',
    padding: '2em',
    textAlign: 'center'
  },
  status: {
    fontSize: '80%',
    fontStyle: 'italic'
  }
}));

export default function UploadForm () {
  const classes = useStyles();
  const [uploadStatus, setStatus] = useState('waiting for a file...');

  const getUploadParams = ({ meta }) => {
    return { url: `${config.get('videoServer')}${config.get('uploadHandler')}` };
  };

  const onSubmit = (files) => {};

  const onChangeStatus = ({ meta, file }, status) => {
    setStatus(status);
  };

  return (
    <Grid container justify='center' spacing={3} className={classes.grid}>
      <Grid item xl={4} lg={4} md={6} sm={6} xs={11}>
        <Paper className={classes.paper}>
          <div className={classes.dropzone}>
            <Typography variant='subtitle1' color='inherit'>
              <Dropzone
                maxFiles={1}
                multiple={false}
                canCancel={false}
                inputContent='Drop a file to upload a video (or click on the button)'
                getUploadParams={getUploadParams}
                onChangeStatus={onChangeStatus}
                onSubmit={onSubmit}
                accept='video/*'
              />
              <div className={classes.status}>{uploadStatus}</div>
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
