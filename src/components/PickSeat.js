import React from 'react';


const styles = {
	modal:{
		maxWidth: "996px",
		maxHeight: "841px",
		background: "#FFFFFF",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px"
	},
	title:{
		fontFamily: "Roboto",
		fontStyle: "normal",												
		fontWeight: "bold",																				
		fontSize: "24px",
		lineHeight: "28px",
		color: "#006494"
	},
	btnCustom:{
		background: "#006494",
		backdropFilter: "blur(4px)",
		borderRadius: "5px",
		color: "#FFFFFF",
		width: "409px",
		height: "43px"
	}
}


const ChooseSeat = () => {
	return (
		<section className="container-fluid" style={styles.modal}>
			<h5 className="text-center" style={styles.title}>Pick Seat</h5>

			<article className="row d-flex flex-column justify-content-center align-items-center">
				<div className="">
					seats here
				</div>

				<div className="container py-md-5 py-sm-2 px-md-5 px-sm-2">
					<h4>Personal details</h4>

					<form>
						<div className="row">
							<div className="col-lg py-md-3 py-sm-2">
								<label>Full Name (As it appears on means of identification)</label>
								<input type="text" className="form-control" placeholder="First name" />
							</div>

							<div className="col-lg py-md-3 py-sm-2">
							    <label>Email</label>
								<input type="text" className="form-control" placeholder="Last name" />
							</div>
						</div>

						<div className="row">
							<div className="col-lg py-md-3 py-sm-2">
								<label>Phone Number</label>
								<input type="tel" className="form-control" placeholder="First name" />
							</div>

							<div className="col-lg py-md-3 py-sm-2">
							    <label>Method of Payment</label>
								<select type="select" className="form-control" placeholder="choose payment method">
									<option>Select</option>
									<option>Cash</option>
									<option>Pay Stack</option>
								</select>
							</div>
						</div>

						<div className="d-flex justify-content-center p-sm-3 p-md-4">
							<button className="btn" style={styles.btnCustom}>Proceed to Pay</button>
						</div>
					</form>

				</div>
			</article>
		</section>
	);
}

export default ChooseSeat;