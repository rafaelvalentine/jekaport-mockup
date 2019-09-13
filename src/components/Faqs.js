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

                    <section className="row d-flex justify-content-end px-4">
                        <div className="col-sm-12 col-md-3">

                            <button className="btn btn-block btn-primary">
                                Ask A Question
                            </button>
                            
                        </div>                        
                    </section>{/* Button end */}

                    <section className="px-4 d-flex flex-column">
                        <h5 className="text-center py-md-4 py-sm-2">View FAQs By Topics</h5>

                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-between">
                                <div class="card col-sm-12 col-md-3 faq-info">
                                    <div class="card-body">
                                        <article className="d-flex flex-column justify-content-center align-items-center h-100">
                                            <span>***</span>
                                            <p>Payments</p>
                                        </article>
                                    </div>
                                </div>

                                <div class="card col-sm-12 col-md-3 faq-info">
                                    <div class="card-body">
                                        <article className="d-flex flex-column justify-content-center align-items-center h-100">
                                            <span>***</span>
                                            <p>Services</p>
                                        </article>
                                    </div>
                                </div>

                                <div class="card col-sm-12 col-md-3 faq-info">
                                    <div class="card-body">
                                        <article className="d-flex flex-column justify-content-center align-items-center h-100">
                                            <span>***</span>
                                            <p>Bookings</p>
                                        </article>
                                    </div>
                                </div>


                                <div class="card col-sm-12 col-md-3 faq-info">
                                    <div class="card-body">
                                        <article className="d-flex flex-column justify-content-center align-items-center h-100">
                                            <span>***</span>
                                            <p>Terminals</p>
                                        </article>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 d-flex flex-column align-items-center justify-content-center pt-md-5 pt-sm-2">
                                <h4>Generally Asked Questions</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  deserunt mollit anim id est laborum. 
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="px-4 d-flex flex-column">
                        <h5 className="text-center py-md-4 py-sm-2">View FAQs By Topics</h5>

                        <div className="row">
                            <div className="col-sm-12">

                                <div id="accordion" className="py-2">
                                    
                                   {/* Accordion */}
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                   <span>***</span> What is Transportation?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                </div>



                                <div id="accordion" className="py-2">
                                    
                                   {/* Accordion */}
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                   <span>***</span> What is Transportation?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div id="accordion" className="py-2">
                                    
                                   {/* Accordion */}
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                   <span>***</span> What is Transportation?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </section>
                    
                    
                </div>

                <Aside />
            </article>
        </>
    )
}

export default Faqs
