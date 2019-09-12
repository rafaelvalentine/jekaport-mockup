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

						<div id="badge"  className="col-md-9 col-sm-12 d-flex justify-content-between align-items-center p-md-5" style={styles.badge}>
							<article>
								<p>Milanovita Travels Inc.</p>
								<p>item</p>
								<p>Item</p>
								<p>Item</p>
								<p>Item</p>
								<p>Item</p>
							</article>

							<article>
								Hello box
							</article>
						</div>
					</article>
					
				</div>
			</section>
		</>
	);
}


export default BusinessDetailDashboard;