import React from 'react';

// components
import RegForm from '../components/RegForm';

// images
import bgImage from '../images/registration.svg';

// pages
import Title from '../components/Title';

const titleStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "bold",
	fontSize: "36px",
	lineHeighteight: "42px",
	color: "#006494",
	textAlign: "center",
	marginTop: "50px"

}

const subTitleStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "normal",
	fontSize: "24px",
	lineHeight: "28px",
	color: "#65617D",
	textAlign: "center"
}

const Authentication = ({children}) => {
	return (
		<>
			<Title 
				title="Become A Partner" 
				titleStyle={titleStyle}
				classes="text-center"
				subClasses="text-center"
				subTitle="Signup today and enjoy unlimited patronage" 
				subTitleStyle={subTitleStyle}
			/>

			<section className="container mt-4">
				<div className="row">
					{children}
				</div>

			</section>
		</>
	)
}

export default Authentication;