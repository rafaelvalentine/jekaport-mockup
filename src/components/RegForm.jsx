import React from 'react';


const formStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "bold",
	fontWeight: "bold",
	fontSize: "18px",
	lineHeight: "21px",
	color: "#006494"
}

const btnStyle = {
	background: "#006494",
	backdropFilter: "blur(4px)",
	borderRadius: "5px",
	borderColor: "#006494",
	color: "#FFF"
}


const RegForm = () => {

	return (
		<>
			<form>
				<div className="form-group">
					<label style={formStyle} htmlFor="companyName">Name of Company (As it appears on CAC Documents)</label>
					<input type="text" className="form-control" id="companyName" placeholder="Enter Name" />
				</div>

				<div className="form-group">
					<label style={formStyle} htmlFor="BusinessAddress">Business Address</label>
					<input type="text" className="form-control" id="BusinessAddress" placeholder="Enter Address" />
				</div>

				<div className="form-group">
					<label style={formStyle} htmlFor="RCNumber">RC Number</label>
					<input type="text" className="form-control" id="RCNumber" placeholder="eg 123456" />
				</div>

				<div className="form-group">
					<label style={formStyle} htmlFor="emailAddress">Email Address</label>
					<input type="text" className="form-control" id="emailAddress" placeholder="Another input" />
				</div>

				<div className="form-group">
					<label style={formStyle} htmlFor="phoneNumber">Phone Number</label>
					<input type="text" className="form-control" id="phoneNumber" placeholder="e.g 0800000000000" />
				</div>

				<div className="form-group">
					<label style={formStyle} htmlFor="branches">Another label</label>
					<input type="text" className="form-control" id="branches" placeholder="eg Lagos, Abuja, PH" />
				</div>

			  	<div className="form-check">
					<input className="form-check-input" type="checkbox" value="" id="termsAndPolicies" />
					<label className="form-check-label" htmlFor="termsAndPolicies">
						<span className="text-muted">I accept the</span><span style={formStyle}> Terms & Policies</span>
					</label>
				</div>

			  <div className="d-flex justify-content-center align-items-center mt-5">
			  	<button style={btnStyle} className="btn btn-lg btn-block btn-custom">Sign Up </button>
			  </div>

			</form>
		</>
	);
}

export default RegForm;