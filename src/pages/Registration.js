import React from 'react';

// components
import RegForm from '../components/RegForm';
import Authentication from '../components/Authentication';

// images
import bgImage from '../images/registration.svg';

// pages
import Title from '../components/Title';


const RegFormBorder  = {
	background: "#FFFFFF",
	boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
	borderRadius: "15px"
}

const Registration = () => {
	return (
		<>
			<Authentication>
				<div className="col-md-6 d-flex justify-content-center align-items-center">
					<img src={bgImage} alt="Registration page background image" />
				</div>

				<div style={RegFormBorder} className="col-md-6 p-5">
					<RegForm />
				</div>
			</Authentication>
		</>
	)
}

export default Registration;