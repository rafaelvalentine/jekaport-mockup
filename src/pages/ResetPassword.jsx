import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';

// apollo
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';

// auth
import { AUTH_TOKEN } from '../constants'

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

// https://jekaport.com/auth/verify/5d7919c0857aba0007fcd988


// verifyUser(token:"dasdg4234"){
//     token
// }


const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword ($token: String!, $password: String!, $confirm: String ) {
    resetPassword ( input: { token: $token, password: $password, confirm: $confirm }) {
      token
    }
  }
`;


class ResetPassword extends Component {

	state = {
		visible: false,
		password: "",
		confirm: ""
	}

	componentDidMount(){
		const { token } = this.props.match.params

		// mutation();
	}

	confirm_login = async data => {
		// grab token
		const { token } = data.login;
		// store token
		this.saveClientData(token);
	}

	catchError = async error => {
		console.log(error)
	}

	handleSubmit = Reset_Password_Mutation => {
		this.openModal()

		// Reset_Password_Mutation() // send new password to server
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

		const { password, confirm } = this.state

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
                    					<h2 style={styles.titleStyle}>Password Reset Successful!</h2>
                    					<p>Your password has been successfully changed</p>             
				                        <Link style={{color: "#006494" }} to="/login" onClick={() => this.closeModal()}>Click here to return to login</Link>
					                </div>
				                </Modal>

							  <Mutation
								mutation={RESET_PASSWORD_MUTATION}
								variables={{ password, confirm }}
								onCompleted={data => this.confirm_login(data)}
								onError={error => this.catchError(error)}>
								{(mutation) => (
									<div className="d-flex justify-content-center align-items-center mt-5">
										<button type="button" onClick={() => this.handleSubmit(mutation)} style={styles.btnStyle} className="btn btn-lg btn-block btn-custom"
										>
										Submit
										</button>
									</div>
								)}
							</Mutation>

							</form>
						</div>
				    </div>
				</div>
			</Password>
		);
	}
}


export default ResetPassword;