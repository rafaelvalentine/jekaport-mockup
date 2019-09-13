import React from 'react'

// components
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
    DetailReviewText: {
		fontWeight: "bold",
		fontSize: "14px",
		lineHeight: "16px",
		color: "rgba(0, 0, 0, 0.4)"
    },
    sortBy: {
        // border: "0.5px solid rgba(0, 0, 0, 0.5)",
        boxSizing: "borderBox",
        borderRadius: "5px"
    },
    header: {
        marginLeft: "-25px",
        marginRight: "-25px"
    }
}


function Faqs() {
    return (
        <>
            <article className="col-sm-12 p-2 d-flex justify-content-between">
                <div style={styles.businessDetailCol} className="col-sm-12 col-md-8 p-4">

                    <header className="title" style={styles.header}>
                        <h1 className="px-md-5" style={styles.asideAd}>FAQs</h1><hr/>
                    </header>
                    
                    
                </div>

                <Aside />
            </article>
        </>
    )
}

export default Faqs
