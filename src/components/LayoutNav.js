import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from './Logo';

// components
import Navbar from './Navbar';

// const styles = {
// 		lintItemStyle:{
// 		fontFamily: "Roboto",
// 		fontStyle: "normal",
// 		fontWeight: "bold",
// 		fontSize: "14px", 
// 		lineHeight: "16px",
// 		color: "#006494"
// 	},
// 	bgColor: {
// 		background: "#FFFFFF"
// 	}
// }


const LayoutNav = ({children}) => {
	return (
		<>
			<section className="container-fluid">
				<Navbar />
				{children}
			</section>
		</>
	);
}


export default LayoutNav;