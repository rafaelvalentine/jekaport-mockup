import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';


const lintItemStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "bold",
	fontStyleize: "14px",
	lineHeight: "16px"
}


const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg navbar-light" style={{background: "#FFF;"}} >
			<Link className="navbar-brand" to="#"><Logo /></Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<Link className="lintItemStyle nav-link" to="#">Login<span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
						<Link className="lintItemStyle nav-link" to="#">Become a partner</Link>
					</li>

					<li className="nav-item">
						<Link className="lintItemStyle nav-link" to="#">Register your vehicle</Link>
					</li>
				</ul>
			</div>
		</nav>

	);
}


export default Navbar;