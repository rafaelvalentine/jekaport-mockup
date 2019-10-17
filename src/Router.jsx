import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Navbar components
import Navbar from './components/Navbar'

// Footer
import Footer from './components/Footer'
//Components 

import Authenticator from './components/Authenticator'
// pages
import Home from './pages/Home.jsx'
import NotFound from './components/Tools/Error/404error'
import Registration from './pages/Registration.jsx'
// import RegVehicle from './pages/RegVehicle.jsx'
import LoginAuth from './pages/Login'
import PickSeat from './pages/PickASeat'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import SearchResults from './pages/SearchResult.jsx'
import CompanyDashboard from './pages/CompanyDashboard'
import BusinessDetailDashboard from './pages/BusinessDetailDashboard'
function Router () {
  return (
    <>
      <Navbar />
      <Switch >
        {/* <Route exact path='/register/vehicle' component={RegVehicle} /> */}
        <Route exact path='/register' component={Registration} />
        <Route exact path='/login/forgotpassword' component={ForgotPassword} />
        <Route exact path='/login/resetpassword' component={ResetPassword} />
        <Route exact path='/login' component={LoginAuth} />
        <Route exact path='/auth/verify/:token' component={Authenticator} />
        <Route exact path='/result' component={SearchResults} />
        <Route exact path='/selectseat' component={PickSeat} />
        <Route exact path='/' component={Home} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path='/companydashboard' component={CompanyDashboard} />
        <Route exact path='/businessdetaildashboard' component={BusinessDetailDashboard} />
        {/* <Route exact path='/' component={Home} /> */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  )
}

export default Router
