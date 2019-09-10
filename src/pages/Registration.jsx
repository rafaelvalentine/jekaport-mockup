import React, { Component } from 'react';

// apollo
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

// components
import Authentication from '../components/Authentication';

// auth
import { AUTH_TOKEN } from '../constants'

// images
import bgImage from '../images/registration.svg';

// pages
import Title from '../components/Title';

const styles = {
	formStyle: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "21px",
		color: "#006494"
	},
	btnStyle: {
		background: "#006494",
		backdropFilter: "blur(4px)",
		borderRadius: "#006494",
		color: "#FFFFFF"
	},
	titleStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "36px",
		lineHeighteight: "42px",
		color: "#006494",
		textAlign: "center",
		marginTop: "50px"

	},
	subTitleStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#65617D",
		textAlign: "center"
	},
	RegFormBorder:{
		background: "#FFFFFF",
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px"
	}

}

// define mutation
const COMPANY_REGISTRATION = gql`
  mutation registerCompany ($name: String!, $email: String!, $address: String!, $password: String!, $rcNumber: String!, $phoneNumber: String! ) {
    registerCompany (input: {
    	name: $name, email: $email, address: $address, password: $password, rcNumber: $rcNumber, phoneNumber: $phoneNumber
    }) {

		token
		email
		role
    }
  }
`;



class Registration extends Component {

	state = {
		name: '',
		email: '',
		address: '',
		password: '',
		rcNumber: '',
		phoneNumber: '',
		termsAndPolicies: false
	}

	// methods	
	onChange = event => { // destructure need properties from e.target
		const { name, value, checked } = event.target;
		
	    this.setState({ [name]: value });
	};

	saveClientData = token => {
		// store auth token to local storage
		localStorage.setItem(AUTH_TOKEN, token);
		// redirect to dashboard
	    this.props.history.push("/companydashboard")
	}

	confirm_registration = async data => {
		console.log(data)
		// grab token
		const { token } = data.registerCompany;
		// store token
		this.saveClientData(token);
	}

	catchError = async error => {
		alert("there was an error")
		console.log("The error:", error)
	}

	render(){
		//  destructure values from state to set form fields to control form
		const { name, email, address, phoneNumber,rcNumber, password, termsAndPolicies } = this.state;

		return (
			<>
				<Title 
					title="Become A Partner" 
					classes="text-center"
					subClasses="text-center"
					subTitle="Signup today and enjoy unlimited patronage" 
					titleStyle={styles.titleStyle}
					subTitleStyle={styles.subTitleStyle}
				/>

				<Authentication>
					<div className="col-md-6 d-flex justify-content-center align-items-center">
						<img alt="Registration page" src={bgImage} />
					</div>

					<div style={styles.RegFormBorder} className="col-md-6 p-5">
						<form>
							<div className="form-group">
								<label style={styles.formStyle} htmlFor="name">Name of Company (As it appears on CAC Documents)</label>
								<input type="text" className="form-control" name="name" placeholder="Enter Name" onChange={this.onChange} value={name} />
							</div>


							<div className="form-group">
								<label style={styles.formStyle} htmlFor="address">Business Address</label>
								<input type="text" className="form-control" name="address" placeholder="Enter Your Address" onChange={this.onChange} value={address} />
							</div>
							

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="rcNumber">RC Number</label>
								<input type="text" className="form-control" name="rcNumber" placeholder="eg 123456" onChange={this.onChange} value={rcNumber} />
							</div>

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="email">Email Address</label>
								<input type="email" className="form-control" name="email" placeholder="Enter Email" onChange={this.onChange} value={email} />
							</div>

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="phoneNumber">Phone Number</label>
								<input type="text" className="form-control" name="phoneNumber" placeholder="e.g 0800000000000" onChange={this.onChange} value={phoneNumber} />
							</div>

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="password">Password</label>
								<input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.onChange} value={password} />
							</div>

						  	<div className="form-check">
								<input className="form-check-input" type="checkbox" name="termsAndPolicies" onChange={this.onChange} value={termsAndPolicies} />
								<label className="form-check-label" htmlFor="termsAndPolicies">
									<span className="text-muted">I accept the</span><span style={styles.formStyle}> Terms & Policies</span>
								</label>
							</div>

							<Mutation 
								mutation={COMPANY_REGISTRATION} 
								variables={{ name, email, address, phoneNumber,rcNumber, password }}
								onCompleted={data => this.confirm_registration(data)}
								onError={error => this.catchError(error)}>
							  {(mutation) => (
							    <div className="d-flex justify-content-center align-items-center mt-5">
								  	<button type="button" onClick={mutation} style={styles.btnStyle} className="btn btn-lg btn-block btn-custom">
								  		Sign Up 
							  		</button>
								</div>
							  )}
							</Mutation>

						</form>
					</div>
				</Authentication>
			</>
		)
	}
}

export default Registration;