import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';


// pages
import LoginAuth from '../pages/LoginAuth';
import Registration from '../pages/Registration';
import RegVehicle from '../pages/RegVehicle';


const lintItemStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "bold",
	fontSize: "14px",
	lineHeight: "16px",
	color: "#006494"
};


const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg navbar-light" style={{background: "#FFF"}} >
			<Link className="navbar-brand" to="/"><Title title="Transport" titleStyle={lintItemStyle} /></Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<Link style={lintItemStyle} className="nav-link" to="login">Login<span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
						<Link style={lintItemStyle} className="nav-link" to="register">Become a partner</Link>
					</li>

					<li className="nav-item">
						<Link style={lintItemStyle} className="nav-link" to="register/vehicle">Register your vehicle</Link>
					</li>
				</ul>
			</div>
		</nav>

	);
}


export default Navbar;