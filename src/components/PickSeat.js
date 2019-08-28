import React from 'react';

// images
import CarSeat from '../images/CarSeat.svg';


const styles = {
	seatsSquare: {
		maxWidth: "390px",
		maxHeight: "289px",
		background: "#FFFFFF",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px"
	},
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
	formHeader: {
		fontWeight: "bold",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#000000"
	},
	formTitle: {
		fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "21px",
		color: "#006494"
	},
	btnCustom:{
		background: "#006494",
		backdropFilter: "blur(4px)",
		borderRadius: "5px",
		color: "#FFFFFF",
		width: "409px",
		height: "43px"
	},
	hrLine:{
		borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
		marginBottom: "1px"
	}
}


const ChooseSeat = () => {
	return (
		<section className="container-fluid" style={styles.modal}>
			<h5 className="text-center" style={styles.title}>Pick Seat</h5>

			<article className="row d-flex flex-column justify-content-center align-items-center">
				<div className="container">
					<article className="col-md-7 col-sm-12 d-flex flex-column flex-md-row">
						<div className="card" style={styles.seatsSquare}>
							<div className="card-body">
								<table>
									<tbody>
										<tr>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
										</tr>
										<tr>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
										</tr>
										<tr>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
										</tr>
										<tr>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
											<td className="px-md-4 py-md-2 py-sm-1 px-sm-3"><img src={CarSeat} alt="Car Seat" /></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div>

						</div>
					</article>

					<article className="col-md-5 col-sm-12">

					</article>				
				</div>
				<div style={styles.hrLine} className="w-100"></div>
				<div className="container py-md-4 py-sm-2 px-md-5 px-sm-0">
					<h4>Personal details</h4>

					<form>
						<div className="row">
							<div className="col-lg py-md-3 py-sm-2">
								<label style={styles.formTitle}>Full Name (As it appears on means of identification)</label>
								<input type="text" className="form-control" placeholder="First name" />
							</div>

							<div className="col-lg py-md-3 py-sm-2">
							    <label style={styles.formTitle}>Email</label>
								<input type="text" className="form-control" placeholder="Last name" />
							</div>
						</div>

						<div className="row">
							<div className="col-lg py-md-3 py-sm-2">
								<label style={styles.formTitle}>Phone Number</label>
								<input type="tel" className="form-control" placeholder="First name" />
							</div>

							<div className="col-lg py-md-3 py-sm-2">
							    <label style={styles.formTitle}>Method of Payment</label>
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