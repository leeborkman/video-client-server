import React from 'react';
import GetVideoList from '../model/GetVideoList';

function VideoGrid() {
  GetVideoList(console.log);
    return (
      <div className="VideoGrid">
        GRID HERE
      </div>
    );
  }
  
  export default VideoGrid;