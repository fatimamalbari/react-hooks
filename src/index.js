import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// https://www.youtube.com/watch?v=OAfP434J2kc
// https://www.youtube.com/embed/cWDJoK8zw58
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div
      dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/cWDJoK8zw58' />" }}
      style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%'
      }}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();