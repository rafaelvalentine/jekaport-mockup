import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Title from './Title';

// Navbar
// import Navbar from './Navbar';


const styles = {
		lintItemStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "14px",
		lineHeight: "16px",
		color: "#006494"
	},
	footerStyle:{
		background: "#E8F1F3"
	}
}


const Footer = () => {

	let today = new Date();
	// let dd = today.getDate();
	// let mm = today.getMonth() + 1; //January is 0!

	let currentYear = "Copyright" + " " + today.getFullYear();

	return (
		// footer here is html 5 tag for semantic meaning. it is not a react component
		<footer style={styles.footerStyle}>
			<nav className="container navbar navbar-expand-lg navbar-light" >
				<Link className="navbar-brand" to="/"><Title title={currentYear} titleStyle={styles.lintItemStyle} /></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link style={styles.lintItemStyle} className="nav-link" to="about">About Us<span className="sr-only">(current)</span></Link>
						</li>
						<li className="nav-item">
							<Link style={styles.lintItemStyle} className="nav-link" to="termsandconditions">Terms &amp; Conditions</Link>
						</li>

						<li className="nav-item">
							<Link style={styles.lintItemStyle} className="nav-link" to="contact">Contact Us</Link>
						</li>
					</ul>
				</div>
			</nav>
		</footer>
	);
}


export default Footer;