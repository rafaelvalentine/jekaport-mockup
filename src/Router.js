import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Navbar components
import Navbar from './components/Navbar';

// Footer
import Footer from './components/Footer';

// pages
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Registration from './pages/Registration.jsx';
import RegVehicle from './pages/RegVehicle.jsx';
import LoginAuth from './pages/LoginAuth.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import SearchResults from './pages/SearchResult.jsx';
import PickSeat from './components/PickSeat';
import CompanyDashboard from './pages/CompanyDashboard';


function Router() {
  return (
    <BrowserRouter>
			<Switch>
				<div>
					<Navbar />
					<Route exact path="/registervehicle" component={RegVehicle} />
					<Route exact path="/dashboard" component={CompanyDashboard} />
					<Route exact path="/result" component={SearchResults} />
					<Route exact path="/selectseat" component={PickSeat} />
					<Route exact path="/forgotpassword" component={ForgotPassword} />
					<Route exact path="/resetpassword" component={ResetPassword} />
					<Route exact path="/register" component={Registration} />
					<Route exact path="/login" component={LoginAuth} />
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</div>
			</Switch>
		<Footer />
    </BrowserRouter>
  );
}

export default Router;
