import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

// components
import DashboardNav from './DashboardNav';

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


const LayoutDashboardNav = ({children}) => {
	return (
		<>
			<section className="container-fluid">
				<DashboardNav />
				{children}
			</section>
		</>
	);
}


export default LayoutDashboardNav;