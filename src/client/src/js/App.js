import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VideoGrid from './view/VideoGrid';

import config from 'react-global-configuration';

config.set({ 
  videoServerRemote: 'http://vid-col-video-collection.apps.us-east-2.online-starter.openshift.com',
  videoServer: '//localhost:8080',
  api: '/api',
  upload: '/upload'
});





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload   YAY.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <VideoGrid/>
    </div>
  );
}

export default App;
