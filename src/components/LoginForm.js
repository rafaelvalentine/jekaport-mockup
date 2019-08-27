import React from 'react';


const formStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "bold",
	fontSize: "18px",
	lineHeight: "21px",
	color: "#006494"
}

const LoginTitleStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "bold",
	fontSize: "36px",
	lineHeight: "42px",
	color: "#006494"
}

const btnStyle = {
	background: "#006494",
	backdropFilter: "blur(4px)",
	borderRadius: "5px",
	borderColor: "#006494",
	color: "#FFF"
}


const LoginForm = () => {

	return (
		<>
			<form>

				<h2 className="text-center formHeader" style={LoginTitleStyle} >Login</h2>

				<div className="form-group">
					<label className="mobileLable" style={formStyle} htmlFor="emailAddress">Email Address</label>
					<input type="text" className="form-control" id="emailAddress" placeholder="Enter Email" />
				</div>


				<div className="form-group">
					<label className="mobileLable" style={formStyle} htmlFor="password">Password</label>
					<input type="text" className="form-control" id="password" placeholder="Enter Password" />
				</div>

			  <div className="d-flex justify-content-center align-items-center mt-5">
			  	<button style={btnStyle} className="btn btn-lg btn-block btn-custom">Sign Up </button>
			  </div>
			</form>
		</>
	);
}

export default LoginForm;