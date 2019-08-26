import React from 'react';

// components
import Title from '../components/Title';
import Password from '../components/Passwords';


const titleStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "bold",
	fontSize: "36px",
	lineHeighteight: "42px",
	color: "#006494",
	marginTop: "20px",
	marginBottom: "23px"

}


const formStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "bold",
	fontWeight: "bold",
	fontSize: "18px",
	lineHeight: "21px"
}

const btnStyle = {
	background: "#006494",
	backdropFilter: "blur(4px)",
	borderRadius: "5px",
	borderColor: "#006494",
	color: "#FFF"
}

const card = {
	boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
	borderRadius: "15px"
}

const ResetPassword = () => {
	return (
		<Password>
			<div className="col-sm-6 mx-auto">
				<div className="card justify-content-center p-5" style={card}>
					<div className="card-body">

						<Title 
							title="Reset Password" 
							classes="text-center"
							titleStyle={titleStyle}
						/>


						<form>
							<div className="form-group py-2">
								<label style={formStyle} htmlFor="password">New Password</label>
								<input type="password" className="form-control" id="password" placeholder="Enter Password" />
							</div>

							<div className="form-group py2">
								<label style={formStyle} htmlFor="confirmPassword">Confirm Password</label>
								<input type="password" className="form-control" id="confirmPassword" placeholder="Enter Password" />
							</div>

						  <div className="d-flex justify-content-center align-items-center mt-5">
						  	<button style={btnStyle} className="btn btn-lg btn-block btn-custom">Submit</button>
						  </div>

						</form>
					</div>
			    </div>
			</div>
		</Password>
	);
}


export default ResetPassword;