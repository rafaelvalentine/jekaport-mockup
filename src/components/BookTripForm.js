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



const BookTripForm = () => {

	return (
		<>
			<section className="">
				<form>
					<div className="form-row">
						<div className="col">
							<input type="text" className="form-control" placeholder="First name" />
							</div>

							<div className="col">
							<input type="text" className="form-control" placeholder="Last name" />
						</div>
					</div>

					<div className="form-row">
						<div className="col">
							<input type="text" className="form-control" placeholder="First name" />
							</div>

							<div className="col">
							<input type="text" className="form-control" placeholder="Last name" />
						</div>
					</div>

					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="termsAndPolicies" />
						<label className="form-check-label" htmlFor="termsAndPolicies">
							<span className="text-muted">I accept the</span><span style={formStyle}> Terms & Policies</span>
						</label>
					</div>

				  <div className="d-flex justify-content-center align-items-center mt-5">
				  	<button style={btnStyle} className="btn btn-lg btn-block btn-custom">Continue</button>
				  </div>

				</form>
			</section>
		</>
	);

}

export default BookTripForm;