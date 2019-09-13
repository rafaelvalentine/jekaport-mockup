import React from 'react'

// component 
import Aside from './Aside'



const styles = {
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
	}
}

function Reviews() {
    return (
        <article className="col-sm-12 p-2 d-flex justify-content-between">
            <div style={styles.businessDetailCol} className="col-sm-12 col-md-8 p-4">

                <h1 style={styles.asideAd}>Reviews</h1>

                <section className="m-2">
                    <div class="card p-2">
                        <div class="card-body">
                            <h4>Business Info</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </section>
                
            </div>

            <Aside />
        </article>
    )
}

export default Reviews
