import React from 'react';


const Title = ({title, subTitle, titleStyle, subTitleStyle}) => {

	return (
		<>
			<h1 id="generalTitle" style={titleStyle}>{title}</h1>
			<h5 id="generalSubTitle" style={subTitleStyle}>{subTitle}</h5>
		</>
	);
}


export default Title; //TODO VALIDATE PROPS