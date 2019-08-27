import React from 'react';

// components
import RegForm from '../components/RegForm';
import Authentication from '../components/Authentication';

// images
import bgImage from '../images/registration.svg';

// pages
import Title from '../components/Title';


const styles = {
	titleStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "36px",
		lineHeighteight: "42px",
		color: "#006494",
		textAlign: "center",
		marginTop: "50px"

	},
	subTitleStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#65617D",
		textAlign: "center"
	},
	RegFormBorder:{
		background: "#FFFFFF",
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px"
	}

}


const Registration = () => {
	return (
		<>
			<Title 
				title="Become A Partner" 
				classes="text-center"
				subClasses="text-center"
				subTitle="Signup today and enjoy unlimited patronage" 
				titleStyle={styles.titleStyle}
				subTitleStyle={styles.subTitleStyle}
			/>

			<Authentication>
				<div className="col-md-6 d-flex justify-content-center align-items-center">
					<img alt="Registration page" src={bgImage} />
				</div>

				<div style={styles.RegFormBorder} className="col-md-6 p-5">
					<RegForm />
				</div>
			</Authentication>
		</>
	)
}

export default Registration;