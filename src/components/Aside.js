import React from 'react'

// images
import milo from '../images/milo.svg'

const styles = {
	badgeDetailsText: {
		fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "21px",
		color: "rgba(0, 0, 0, 0.4)"
	},
	DetailReviewText: {
		fontWeight: "bold",
		fontSize: "14px",
		lineHeight: "16px",
		color: "rgba(0, 0, 0, 0.4)"
	},
	businessDetailCol: {
		border: "1px solid rgba(0, 0, 0, 0.5)",
		boxSizing: "border-box",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px",
		marginBottom: "25px"
	},
	asideAd: {
		fontWeight: "bold",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#000000"
	},
	businessDetailSubTitle: {
		fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "21px",
		color: "#006494"
	},
	businessDestailSubText:{
		fontSize: "14px", 
		lineHeight: "16px"
	}
}



const Aside = () => {

    return (
        <div className="col-sm-12 col-md-4 businessDetailAside">
            <div className="" style={styles.businessDetailCol}>
                <nav class="nav flex-column p-md-4">
                    <a class="nav-link btn btn-block btnCustom btn-ok active" href="#">About</a>
                    <a class="nav-link btn btn-block btnCustom btn-ok" href="#">Business Hours</a>
                    <a class="nav-link btn btn-block btnCustom btn-ok" href="#">Reviews</a>
                    <a class="nav-link btn btn-block btnCustom btn-ok" href="#">Services</a>
                    <a class="nav-link btn btn-block btnCustom btn-ok" href="#">FAQs</a>
                    <a class="nav-link btn btn-block btnCustom btn-ok" href="#">Contact Us</a>
                </nav>
            </div>

            <div className="px-md-2 py-md-3" style={styles.businessDetailCol}>
                <h3 className="text-center" style={styles.asideAd}>Milovita Travels Inc.</h3>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="img-wrapper">
                        <img src={milo} alt="milovita product" />
                    </div>

                    <div className="d-flex flex-column">
                        <div className="" style={styles.badgeDetailsText}>
                            <p>
                                <span>***</span> 
                                Bus &amp; Logistics Company
                            </p>
                        </div>

                        <div style={styles.badgeDetailReview}>
                            <p>
                                4.5
                                <span>***</span>
                            </p>
                        </div>
                        <p style={styles.DetailReviewText}>37 Reviews</p>
                    </div>
                </div>
            </div>							
        </div>
    )
}

export default Aside
