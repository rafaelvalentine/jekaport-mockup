import React from 'react';

// components
import Title from '../components/Title';
import Password from '../components/Passwords';


const styles = {
	titleStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "36px",
		lineHeighteight: "42px",
		color: "#006494",
		textAlign: "center",
		marginTop: "50px",
		paddingBottom: "10px"

	},

	subTitleStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#65617D",
		textAlign: "center",
		paddingBottom: "10px"
	},
	formStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "21px"
	},
	card:{
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px"
	},
	btnStyle:{
		background: "#006494",
		backdropFilter: "blur(4px)",
		borderRadius: "5px",
		borderColor: "#006494",
		color: "#FFF"
	}

}

const ForgotPassword = () => {
	return (
		<Password>
			<div className="col-sm-8 mx-auto">
				<div className="card justify-content-center p-5" style={styles.card} >
					<div className="card-body">
						<Title 
							title="Forgot Password?" 
							titleStyle={styles.titleStyle}
							classes="text-center"
							subClasses="text-center"
							subTitle="Submit your email address and we will send you a link to reset your password" 
							subTitleStyle={styles.subTitleStyle}
						/>


						<form>
							<div className="form-group">
								<label style={styles.formStyle} htmlFor="emailAddress">Email</label>
								<input type="email" className="form-control" id="emailAddress" placeholder="Another input" />
							</div>

						  <div className="d-flex justify-content-center align-items-center mt-5 mb-3">
						  	<button style={styles.btnStyle} className="btn btn-lg btn-block btn-custom">Sign Up </button>
						  </div>

						</form>

					</div>
				</div>
		    </div>
		</Password>
	);
}


export default ForgotPassword;