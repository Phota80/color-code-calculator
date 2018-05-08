import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const ThemedApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
