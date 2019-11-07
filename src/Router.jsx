import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Navbar components
// import Navbar from './components/Navbar'

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
import ForgotPassword from './container/ForgotPassword'
import ResetPassword from './container/ResetPassword'
import SearchResults from './pages/SearchResult.jsx'
import ResetSent from './pages/ResetSent'
import ResetComplete from './pages/ResetComplete'
import CompanyDashboard from './pages/Dashboard'
import BusinessDetailsDashboard from './container/DashboardBusinessDetails'
import VehicleRoutes from './container/VehicleRoutes'
import CompanyDetails from './container/CompanyDetails'
import BusinessDetails from './container/BusinessDetails'
import BookingSearchResult from './container/BookingSearchResult'
// import CompanyDetails from './container/DashboardBusinessDetails'
function Router () {
  return (
    <>
      <Loader />
      {/* <Navbar /> */}
      <Switch>
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
        <Route exact path='/bookingsearchresult' component={BookingSearchResult} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path='/resetsent' component={ResetSent} />
        <Route exact path='/dashboard/companydashboard' component={CompanyDashboard} />
        <Route exact path='/dashboard/businessdetaildashboard' component={BusinessDetailsDashboard} />
        <Route exact path='/dashboard/routes' component={VehicleRoutes} />
        <Route exact path='/resetcomplete' component={ResetComplete} />
        <Route exact path='/settings'>
          <Redirect to='/settings/companydetails' />
        </Route>
        <Route exact path='/settings/companydetails' component={CompanyDetails} />
        <Route exact path='/settings/businessdetails' component={BusinessDetails} />
        <Route exact path='/logout'>
          <Redirect to='/' />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  )
}

export default Router
