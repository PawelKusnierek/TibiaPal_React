import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'
import App from './App'
import CookieConsent from './components/OnLoad'


ReactDOM.render(
    <div>
        <App />
        <CookieConsent />
    </div>,
    document.getElementById('root'));
