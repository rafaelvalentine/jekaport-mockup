import React from 'react';


const Title = ({title, subTitle, titleStyle, subTitleStyle}) => {

	return (
		<>
			<h1 style={titleStyle}>{title}</h1>
			<h5 style={subTitleStyle}>{subTitle}</h5>
		</>
	);
}


export default Title;