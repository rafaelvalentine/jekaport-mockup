import React from 'react';

// components
import RegForm from '../components/RegForm';

// images
import bgImage from '../images/registration.svg';

// pages
import Title from '../components/Title';

const titleStyle = {
	fontFamily: "Roboto;",
	fontStyle: "normal;",
	fontWeight: "bold;",
	fontSize: "36px;",
	lineHeighteight: "42px;",
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
	color: "#006494",
	textAlign: "center"
}

const Registration = () => {
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

			<section className="d-flex justify-content-center align-items-center">

			<div>
				<img src={bgImage} alt="Registration page background image" />
			</div>

			<div>
				<RegForm />
			</div>

			</section>
		</>
	)
}

export default Registration;