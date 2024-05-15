import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import config from './config/config.json'
// import "./easteregg";
// import Analytics from "analytics";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { AnalyticsProvider, AnalyticsConsumer } from 'use-analytics';
// require('dotenv').config()
(() => {
  setInterval(() => {
    if (document.hasFocus()) {
      document.title = config.title
    } else {
      document.title = 'Come Back :('
      document.getElementById('oneko').style.filter = 'invert(100%)'
    }
  }, 200)
  // oneko import
  ;(() => {
    fetch('https://raw.githubusercontent.com/adryd325/oneko.js/8fa8a1864aa71cd7a794d58bc139e755e96a236c/oneko.js')
            .then(x => x.text())
            .then(s => s.replace('./oneko.gif', 'https://raw.githubusercontent.com/adryd325/oneko.js/14bab15a755d0e35cd4ae19c931d96d306f99f42/oneko.gif'))
            .then(eval)
  })()
  const isDev = process.env.NODE_ENV !== 'production'
  console.log(
    `%c What's up?`,
    `font-size: 120px;
    font-family: "Poppins", sans-serif;
    background-size: 1000% 1000%;
    animation: gradient 1s ease infinite;
    `
  )
  console.log(
    `%c Thanks for visting this site you can dontate me at https://ko-fi.com/saahil\n Try to find the easter egg in this site🥚\n HINT: to use it you must use the console it is a very VERY hard one`,
    `font-size: 15px;`
  )
  console.log(`%c 🚧This site is archived;🚧`, `font-size: 12px;`)
  if (isDev) {
    console.debug(
      'This message will show during production build. & development build'
    )
  }
})()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(
  process.env.NODE_ENV === 'production'
    ? () => {
        // kill log event
        // no logs on production
    }
    : (l) => {
      const breaker = new Array(40).join('=')
      console.debug(breaker)
      console.debug('VITALS', l)
      console.debug(breaker)
    }
)
