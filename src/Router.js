import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Navbar components
// import Navbar from './components/Navbar';
import LayoutNav from './components/LayoutNav';
import LayoutDashboardNav from './components/LayoutDashboardNav';

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
// import DriverDashboard from './pages/DriverDashboard';
// import BusinessDetailDashboard from './pages/BusinessDetailDashboard';


// Grapql queries
const client = new ApolloClient({
  uri: `http://206.189.22.170/`,
})


function Router() {
  return (
  	<ApolloProvider client={client}>
	    <BrowserRouter>
			<Switch>
				<LayoutNav>	
					<Route exact path="/registervehicle" component={RegVehicle} />
					<Route exact path="/result" component={SearchResults} />
					<Route exact path="/selectseat" component={PickSeat} />
					<Route exact path="/forgotpassword" component={ForgotPassword} />
					<Route exact path="/resetpassword" component={ResetPassword} />
					<Route exact path="/register" component={Registration} />
					<Route exact path="/login" component={LoginAuth} />
					<Route exact path="/" component={Home} />
					<Route exact path="/companydashboard" component={CompanyDashboard} />
				</LayoutNav>
				<Route component={NotFound} />
			</Switch>
			<Footer />
	    </BrowserRouter>
    </ApolloProvider>
  );
}

export default Router;
