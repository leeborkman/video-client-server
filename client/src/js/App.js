import React from 'react';
import config from './config/config';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VideoGrid from './view/VideoGrid';




function App() {
  return (
    <div className="App">
      <VideoGrid/>
    </div>
  );
}

export default App;
