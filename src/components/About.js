import React from 'react'

// component
import Aside from './Aside'


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




const About = () => {
    return (
        <article className="col-sm-12 p-2 d-flex justify-content-between">
            <div style={styles.businessDetailCol} className="col-sm-12 col-md-8 p-4">

                <h1 style={styles.asideAd}>About Us</h1>

                <section className="m-2">
                    <div class="card p-2">
                        <div class="card-body">
                            <h4 style={styles.businessDetailSubTitle}>Business Info</h4>
                            <p style={styles.businessDestailSubText}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mx-2 my-md-4">
                    <div class="card p-2">
                        <div class="card-body">
                            <ul style={styles.businessDestailSubText}>
                                <li>Oshodi Under Bridge, Lagos</li>
                                <li>Ikeja Under Bridge, Lagos</li>
                                <li>Ajah Under Bridge, Lagos</li>
                                <li>Onisha Head Briddge Asaba</li>
                                <li>Ilaje Bus Stop</li>
                                <li>Utako Bus Stop Abuja</li>
                            </ul>
                        </div>
                    </div>
                </section>


                <section className="mx-2 my-md-4">
                    <div class="card p-2">
                        <div class="card-body">
                            <h4 style={styles.businessDetailSubTitle}>Business Hours</h4>
                            <article className="d-flex flex-column justify-content-center">
                                <div className="d-flex flex-row" style={styles.businessDestailSubText}>
                                    <p className="">Monday-Sunday</p>
                                    <p className="px-3">4:00am - 11pm daily</p>
                                </div>
                                <div className="d-flex flex-row align-items-center" style={styles.businessDestailSubText}>
                                    <p className="">Icon</p>
                                    <p className="px-3">No Night Travels</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>


                <section className="mx-2 my-md-4">
                    <div class="card p-2">
                        <div class="card-body">
                            <h4 style={styles.businessDetailSubTitle}>Business Hours</h4>
                            <ul>
                                <li>Oshodi Under Bridge, Lagos</li>
                                <li>Ikeja Under Bridge, Lagos</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <Aside />
        </article>
    )
}

export default About
