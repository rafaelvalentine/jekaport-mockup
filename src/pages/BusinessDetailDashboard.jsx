import React from 'react';

// auth
import { AUTH_TOKEN } from '../constants'

// images
import milo from '../images/milo.svg'

const styles = {
	badge: {
		border: "1px solid rgba(0, 0, 0, 0.5)",
		boxSizing: "borderBox",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "5px"
	},
	badgeAd: {
		border: "1px solid rgba(0, 0, 0, 0.5)",
		boxSizing: "border-box",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "5px"
	},
	badgeAdTitle: {
		fontSize: "20px",
		lineHeight: "23px",
		color: "#006494"
	},
	badgeDetailsTitle:{
		fontWeight: "bold",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#000000"
	},
	badgeDetailsText: {
		fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "21px",
		color: "rgba(0, 0, 0, 0.4)"
	},
	badgeDetailReview: {
		fontWeight: "bold",
		fontSize: "48px",
		lineHeight: "56px",
		color: "#006494"
	},
	badgeDetailBox: {
		// border: "1px solid rgba(0, 0, 0, 0.5)",
		boxSizing: "border-box",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px"
	}
}


const BusinessDetailDashboard = () => {
	return (
		<>
			<section className="container">
				<div className="row">

					<article className="col-sm-12 d-flex flex-column flex-md-row justify-content-between p-2">
						<div id="badgeAd" className="col-md-3 col-sm-12 d-flex justify-content-between align-items-center p-3" style={styles.badgeAd}>
							<img src={milo} alt="ad Image" />
							<p style={styles.badgeAdTitle}>Milo Travels Inc.</p>
						</div>

						<div id="badge"  className="col-md-9 col-sm-12 px-md-5 py-md-3" style={styles.badge}>
							<div className="row d-flex flex-column flex-md-row justify-content-between align-items-center">
								<article className="">
									<p className="p-md-2" style={styles.badgeDetailsTitle}>Milanovita Travels Inc.</p>
									<p>Bus & Logistics Company</p>
									<p>Km. 25, Lorem way, Lokoja, Ngeria</p>
									<p>09000000000, 08000000000</p>
									<p style={styles.badgeDetailReview}>4.5<span>***</span></p>
									<p>87 Reviews</p>
								</article>

								<article className="w-50">
									<div class="card" style={styles.badgeDetailBox}>
										<div class="card-body">
											<div className="row d-flex justify-content-between p-md-4 p-sm-2">
												<div><button className="btn btn-small btn-primary btn-block">Book</button></div>
												<div className="">
													<p><span>icon</span> Share Url</p>
													<div>
														<span>Twitter</span>
														<span>Instagram</span>
														<span>Gmail</span>
														<span>Whatsapp</span>
													</div>
													
												</div>
											</div>
										</div>
									</div>
								</article>
							</div>	
						</div>
					</article>
					
				</div>
			</section>
		</>
	);
}


export default BusinessDetailDashboard;