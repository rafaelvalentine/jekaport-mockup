import React from 'react';

// components
import LoginForm from '../components/LoginForm';
import Authentication from '../components/Authentication';

// images
import bgImage from '../images/Login.svg';

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



const RegFormBorder  = {
	background: "#FFFFFF",
	boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
	borderRadius: "15px"
}

const LoginAuth = () => {
	return (
		<>
			<Title 
				title="Welcome!" 
				titleStyle={titleStyle}
				classes="text-center"
				subClasses="text-center"
				subTitle="Signup today and enjoy unlimited patronage" 
				subTitleStyle={subTitleStyle}
			/>

			<section className="m-5 p-4">
				<Authentication>
					<div className="col-md-6 d-flex justify-content-center align-items-center">
						<img src={bgImage} alt="Registration page background image" />
					</div>

					<div style={RegFormBorder} className="col-md-6 p-5">
						<LoginForm />
					</div>
				</Authentication>
			</section>
		</>
	)
}

export default LoginAuth;