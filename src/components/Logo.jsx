import React from 'react';

const styles = {
		logoStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "14px", 
		lineHeight: "16px",
		color: "#006494"
	}
}


const Logo = ({display}) => {
	return <span className="logoText" style={styles.logoStyle}>{display}</span>;
}

export default Logo