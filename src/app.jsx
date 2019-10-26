import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Error from './components/Tools/Error/errorHandling'
import Routes from './Router'
import ScrollToTop from './components/Tools/ScrollToTop'

export default () => {
  return (
    <Router>
      <Error>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Error>
    </Router>
  )
}
