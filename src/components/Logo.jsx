import React from 'react';

const logoStyle = {
	position: "absolute !important;",
	width: "75px !important;",
	height: "16px !important;",
	left: "25px !important;",
	top: "25px !important;",
	fontFamily: "Roboto !important;",
	fontStyle: "normal !important;",
	fontSize: "14px !important;",
	lineHeight: "16px !important;"
}

const Logo = () => {
	return <span style={logoStyle}>Transport</span>;
}

export default Logo