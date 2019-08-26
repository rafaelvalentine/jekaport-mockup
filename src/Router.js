import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Navbar components
import Navbar from './components/Navbar';

// Footer
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Registration from './pages/Registration';
import RegVehicle from './pages/RegVehicle';
import LoginAuth from './pages/LoginAuth';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';


function Router() {
  return (
    <BrowserRouter>
    	<Navbar />
			<Switch>
				<Route exact path="/register/vehicle" component={RegVehicle} />
				<Route exact path="/register" component={Registration} />
				<Route exact path="/forgotpassword" component={ForgotPassword} />
				<Route exact path="/resetpassword" component={ResetPassword} />
				<Route exact path="/login" component={LoginAuth} />
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		<Footer />
    </BrowserRouter>
  );
}

export default Router;
