import React from 'react'
import ReactDOM from 'react-dom/client'
import * as CookieConsent from 'vanilla-cookieconsent';
import './index.css'
import Consent from './Cookies/Consent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Consent />
    <h1>React Cookie Consent</h1>
    <a href='https://cookieconsent.orestbida.com/essential/getting-started.html'>
      Documentation
    </a>
    <div className='footer'>
      <a href='#' onClick={() => CookieConsent.showPreferences()}>
        Cookie Preferences
      </a>
    </div>
  </React.StrictMode>,
)
