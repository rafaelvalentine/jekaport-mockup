import React from 'react'
import { Link } from 'react-router-dom'

// component 
import Aside from './Aside'

// images
import Smile from '../images/Smile.svg'



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
    emoticons: {
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "23px",
        color: "#006494"
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
                            <article className="d-flex justify-content-between align-items-center">

                                <div className="d-flex flex-column">
                                    <h6 style={styles.badgeDetailsText}>Overall Rating</h6>
                                    <div className="d-flex justiy-content-between" style={styles.badgeDetailReview}>
                                        <p>4.5</p>
                                        <div className="pl-md-4 pl-sm-2">
                                            <span>***</span>
                                            <h6 style={styles.DetailReviewText}>87 Reviews</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <form>
                                        <div className="form-group">
                                            <select className="form-control px-md-4" id="sortBy" style={styles.sortBy}>
                                                <option>Sort By</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>

                            </article>
                        </div>
                    </div>
                </section>

                <section className="mx-2">
                    <div class="card p-2 mt-4">
                        <div class="card-body">
                            <article className="d-flex justify-content-between align-items-center">

                                <div className="col-sm-12 col-md-3">
                                    <div class="d-flex flex-column aligin-items-between justify-content-center">
                                        <img src={Smile} alt="Smiling icon" />
                                        <p className="py-4" style={styles.emoticons}>3.5 <span>***</span></p>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-9">
                                    <div className="d-flex flex-column">
                                        <h6>John Doe</h6>
                                        <p>
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                        </p>
                                        <Link to="">Read more</Link>
                                    </div>
                                </div>
                            
                            </article>
                        </div>
                    </div>


                    <div class="card p-2 mt-4">
                        <div class="card-body">
                            <article className="d-flex justify-content-between align-items-center">

                                <div className="col-sm-12 col-md-3">
                                    <div class="d-flex flex-column aligin-items-between justify-content-center">
                                        <img src={Smile} alt="Smiling icon" />
                                        <p className="py-4" style={styles.emoticons}>3.5 <span>***</span></p>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-9">
                                    <div className="d-flex flex-column">
                                        <h6>John Doe</h6>
                                        <p>
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                        </p>
                                        <Link to="">Read more</Link>
                                    </div>
                                </div>
                            
                            </article>
                        </div>
                    </div>


                    <div class="card p-2 mt-4">
                        <div class="card-body">
                            <article className="d-flex justify-content-between align-items-center">

                                <div className="col-sm-12 col-md-3">
                                    <div class="d-flex flex-column aligin-items-between justify-content-center">
                                        <img src={Smile} alt="Smiling icon" />
                                        <p className="py-4" style={styles.emoticons}>3.5 <span>***</span></p>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-9">
                                    <div className="d-flex flex-column">
                                        <h6>John Doe</h6>
                                        <p>
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                        </p>
                                        <Link to="">Read more</Link>
                                    </div>
                                </div>
                            
                            </article>
                        </div>
                    </div>
                </section>
                
            </div>

            <Aside />
        </article>
    )
}

export default Reviews
