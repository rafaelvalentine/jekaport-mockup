import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Navbar components
import Navbar from './components/Navbar'

// Footer
import Footer from './components/Footer'


// Components
import Loader from './container/PageLoader'
import Authenticator from './components/Authenticator'

// pages
import Home from './container/Home/'
import NotFound from './components/Tools/Error/404error'
import Registration from './pages/Registration.jsx'
import Partner from './container/Partner'
import PartnerForm from './container/Partner/partner'
import LoginAuth from './container/Login'
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
      <Loader />
      <Switch >
        <Route exact path='/become-a-partner' component={Partner} />
        <Route exact path='/become-a-partner/form-two' component={PartnerForm} />
        <Route exact path='/register' component={Registration} />
        <Route exact path='/login/forgotpassword' component={ForgotPassword} />
        <Route exact path='/login/resetpassword/:token' component={ResetPassword} />
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
