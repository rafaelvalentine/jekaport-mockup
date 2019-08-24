import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Navbar components
import Navbar from './components/Navbar';

// pages
import NotFound from './pages/NotFound';
import Registration from './pages/Registration';


function Router() {
  return (
    <BrowserRouter>
    	<Navbar />
		<Switch>
			<Route exact path="/" component={Registration} />
			<Route component={NotFound} />
		</Switch>
    </BrowserRouter>
  );
}

export default Router;
