import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'styled-components'
import colors from './theme/main'
import WebFont from 'webfontloader'

ReactDOM.render(
  <ThemeProvider theme={colors} >
    <App />
  </ThemeProvider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

WebFont.load({
  google: {
    families: ['Roboto', 'sans-serif']
  }
})
