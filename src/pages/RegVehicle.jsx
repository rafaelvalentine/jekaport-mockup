import React, { Component } from 'react';

// components
import Authentication from '../components/Authentication';

// apollo
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

// auth
import { AUTH_TOKEN } from '../constants'

// images
import bgImage from '../images/regVehicle.svg';

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
		borderRadius: "5px",
		borderColor: "#006494",
		color: "#FFF"
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
const VEHICLE_REGISTRATION = gql`
  mutation registerVechile ($name: String!, $email: String!, $phoneNumber: String!, $type: String!, $driverLicenseNumber: String!, $plateNumber: String!, $model: String!, $seats: Int!, $password: String!) {
    registerVechile (input: {
    	name: $name, email: $email, phoneNumber: $phoneNumber, type: $type, driverLicenseNumber: $driverLicenseNumber, plateNumber: $plateNumber, model: $model, seats: $seats, password: $password
    }) {

		token
		email
		role
    }
  }
`;



class RegVehicle extends Component {

	state = {
		name: '',
		email: '',
		phoneNumber: '',
		type: '',
		driverLicenseNumber: '',
		plateNumber: '',
		model: '',
		seats: 0,
		password: '',
		termsAndPolicies: '',
		loading: false,
		errors: []
	}

	// methods	
	onChange = event => { // destructure need properties from e.target
	    let { name, value, checked, type } = event.target;
	    if(name === "termsAndPolicies" && checked === true){
	    	this.setState({
	    		termsAndPolicies: true // accept terms and condition
	    	})
	    }

	    this.setState({ [name]: type === "number" ? parseInt(value) : value }); // Todo
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
		const { token } = data.registerVechile;
		// store token
		this.saveClientData(token);
	 }


	 handleSubmit = regVehicleMutaion => {

		const { email, password } = this.state;

		this.setState({ loading: true })
		
		const validate = (email, password) => {
			const errors = [];

			const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

			if(!validEmailRegex.test(email)){
				errors.push("Email is invalid")
			}

			const validPasswordRegex = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)

			if(!validPasswordRegex.test(password)){
				errors.push("Password must contain 8 digit, one letter and one number")
			}
			
			return errors;
		}

		const errors = validate(email, password);
		if (errors.length > 0) {
		  this.setState({ errors });
		  return;
		}

		regVehicleMutaion() // send company data to server
	}
	 

	render(){
		//  destructure values from state to set form fields to control form
		const { name, email, phoneNumber, type, driverLicenseNumber, plateNumber, model, seats, password, termsAndPolicies, errors, loading} = this.state;

		return (
			<>
				<Title 
					title="Register Your Vehicle" 
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
								<label style={styles.formStyle} htmlFor="name">Name of Owner (As it appears on Vehicle Papers)</label>
								<input type="text" className="form-control" name="name" placeholder="Enter Name" onChange={this.onChange} value={name} />
							</div>

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="email">Email Address</label>
								<input type="email" className="form-control" name="email" placeholder="Another input" onChange={this.onChange} value={email} />
							</div>

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="phoneNumber">Phone Number</label>
								<input type="text" className="form-control" name="phoneNumber" placeholder="e.g 0800000000000" onChange={this.onChange} value={phoneNumber} />
							</div>

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="type">Type of Vehicle</label>
								<input type="text" className="form-control" name="type" placeholder="Enter Your type" onChange={this.onChange} value={type} />
							</div>
							

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="driverLicenseNumber">Driver's License (Number Only)</label>
								<input type="text" className="form-control" name="driverLicenseNumber" placeholder="eg 123456" onChange={this.onChange} value={driverLicenseNumber} />
							</div>

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="plateNumber">Vehicle's Number</label>
								<input type="text" className="form-control" name="plateNumber" placeholder="Enter plateNumber" onChange={this.onChange} value={plateNumber} />
							</div>

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="model">Vehicle Model</label>
								<input type="text" className="form-control" name="model" placeholder="Enter model" onChange={this.onChange} value={model} />
							</div>

							<div className="form-group">
								<label style={styles.formStyle} htmlFor="seats">Number of Vehicle Seat</label>
								<input type="number" className="form-control" name="seats" placeholder="Enter seats" onChange={this.onChange} value={seats} />
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
								mutation={VEHICLE_REGISTRATION} 
								variables={{ name, email, phoneNumber, type, driverLicenseNumber, plateNumber, model, seats, password }}
								onCompleted={data => this.confirm_registration(data)}
								onError={error => this.catchError(error)}>
							  {(mutation) => (
							    <div className="d-flex justify-content-center align-items-center mt-5">
								  	<button type="button" onClick={() => {this.handleSubmit(mutation)}} style={styles.btnStyle} className="btn btn-lg btn-block btn-custom">
									  	{!loading && <span>Submit</span>} 
										{loading && <div className="spinner-grow" role="status"><span className="sr-only">Loading...</span></div>}
							  		</button>
								</div>
							  )}
							</Mutation>

							{errors.map(error => (
								<div className="my-md-4 my-sm-2 text-danger" key={error}> Error: { error } </div>
							))}

						</form>
					</div>
				</Authentication>
			</>
		)
	}
}

export default RegVehicle;