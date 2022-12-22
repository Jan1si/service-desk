import React  from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
);

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}