import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reportRemoteVitals } from './remoteWebVitals';  // Import the remote vitals function
 
ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
  document.getElementById('root')
);
 
// Start reporting web vitals to the remote server
reportRemoteVitals();