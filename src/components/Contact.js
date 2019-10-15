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
    },
    header: {
        marginLeft: "-25px",
        marginRight: "-25px"
    }
}






function Contact() {
    return (
        <>
            <article className="col-sm-12 p-2 d-flex justify-content-between">
                <div style={styles.businessDetailCol} className="col-sm-12 col-md-8 p-4">

                    <header className="title" style={styles.header}>
                        <h1 className="px-md-5" style={styles.asideAd}>Contact Us</h1><hr/>
                    </header>


                    <section className="px-4 d-flex flex-column">
                        <form>
                            <div className="form-group my-md-4 my-sm-2">
                                <input type="text" className="form-control p-md-4" id="formGroupExampleInput" placeholder="Example input" />
                            </div>

                            <div className="form-group my-md-4 my-sm-2">
                                <input type="text" className="form-control p-md-4" id="formGroupExampleInput2" placeholder="Another input"  />
                            </div>

                            <div className="form-group my-md-4 my-sm-2">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                            </div>

                            <button className="btn btn-block btnCustom btn-ok p-2">Send</button>
                        </form>
                    </section>
                </div>

                <Aside />
            </article>
        </>
    )
}

export default Contact
