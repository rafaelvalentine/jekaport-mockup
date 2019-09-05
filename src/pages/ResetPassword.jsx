import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';

// components
import Title from '../components/Title';
import Password from '../components/Passwords';


const styles = {
	titleStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "36px",
		lineHeighteight: "42px",
		color: "#006494",
		marginTop: "20px",
		marginBottom: "23px"
	},
	formStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "21px"
	},
	card:{
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px"
	},
	btnStyle:{
		background: "#006494",
		backdropFilter: "blur(4px)",
		borderRadius: "5px",
		borderColor: "#006494",
		color: "#FFF"
	}

}

class ResetPassword extends Component {

	state = {
		visible: false
	}

	openModal = () => {
		// receive network response

		// update state
        this.setState({
            visible : true
        });
    }

    closeModal = () => {
        this.setState({
            visible : false
        });
    }

	render() {

		return (
			<Password>
				<div className="col-sm-6 mx-auto">
					<div className="card justify-content-center p-5" style={styles.card}>
						<div className="card-body">

							<Title 
								title="Reset Password" 
								classes="text-center"
								titleStyle={styles.titleStyle}
							/>


							<form>
								<div className="form-group py-2">
									<label style={styles.formStyle} htmlFor="password">New Password</label>
									<input type="password" className="form-control" id="password" placeholder="Enter Password" />
								</div>

								<div className="form-group py2">
									<label style={styles.formStyle} htmlFor="confirmPassword">Confirm Password</label>
									<input type="password" className="form-control" id="confirmPassword" placeholder="Enter Password" />
								</div>

				                <Modal visible={this.state.visible} width="900" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
				                    <div className="h-100 d-flex justify-content-center align-items-center flex-column">
                    					<h2 className="">Password Reset Successful!</h2>
                    					<p>Your password has been successfully changed</p>             
				                        <Link to="/login" onClick={() => this.closeModal()}>Click here to return to login</Link>
					                </div>
				                </Modal>

							  <div className="d-flex justify-content-center align-items-center mt-5">
							  	<button type="button" onClick={() => this.openModal()} style={styles.btnStyle} className="btn btn-lg btn-block btn-custom">Submit</button>
							  </div>

							</form>
						</div>
				    </div>
				</div>
			</Password>
		);
	}
}


export default ResetPassword;