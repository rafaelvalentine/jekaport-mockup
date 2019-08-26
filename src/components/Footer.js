import React from 'react';

// Navbar
// import Navbar from './Navbar';


const footerStyle = {
	background: "#E8F1F3"
}


const Footer = () => {
	return (
		// footer here is html 5 tag for semantic meaning. it is not a react component
		<footer style={footerStyle}>
			<div className="container" >Footer</div>
		</footer>
	);
}


export default Footer;