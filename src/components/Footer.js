import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Logo from './Logo';

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
			<section className="container">
				<div className="d-flex justify-content-between align-items-center">
					<Link className="" to="/"><Logo display={currentYear} /></Link>
					<ul className="footer-nav d-flex align-self-center h-100">
						<Link style={styles.lintItemStyle} className="nav-link" to="about">About Us<span className="sr-only">(current)</span></Link>						
						<Link style={styles.lintItemStyle} className="nav-link" to="termsandconditions">Terms &amp; Conditions</Link>					
						<Link style={styles.lintItemStyle} className="nav-link" to="contact">Contact Us</Link>
					</ul>
				</div>
			</section>
		</footer>
	);
}


export default Footer;