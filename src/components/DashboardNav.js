import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const styles = {
		lintItemStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "14px", 
		lineHeight: "16px",
		color: "#006494"
	},
	bgColor: {
		background: "#FFFFFF"
	}
}


const DashboardNav = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light" style={styles.bgColor} >
				<Link className="navbar-brand" to="/"><Logo display="Transport" /></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="mobileNav collapse navbar-collapse" id="navbarSupportedContent">
					<p><strong>Lawrence Eagles</strong> Your Login was 30mintues ago</p>
				</div>
			</nav>
		</>
	);
}


export default DashboardNav;