import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// components
import Authentication from '../components/Authentication';

// apollo
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

// images
import bgImage from '../images/registration.svg';

// pages
import Title from '../components/Title';

const formStyle = {
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "bold",
	fontSize: "18px",
	lineHeight: "21px",
	color: "#006494"
}

const btnStyle = {
	background: "#006494",
	backdropFilter: "blur(4px)",
	borderRadius: "5px",
	borderColor: "#006494",
	color: "#FFF"
}


const styles = {
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


const COMPANY_REGISTRATION = gql`
  mutation ($name: String!, $email: String!, $password: String!, $address: String!, $rcNumber: String!, $phoneNumber: String! ) {
    registerCompany (name: $name, email: $email, password: $password, address: $address, rcNumber: $rcNumber, phoneNumber: $phoneNumber) {

      Auth{
    	token
    	email
    	role
	  }	
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
onSubmit = async (event) => {

	event.preventDefault();

    // this.setState({ // todo
    //   usernameError: '',
    //   emailError: '',
    //   passwordError: '',
    // });

	const { name, email, address, phoneNumber,rcNumber, password } = this.state;
    const response = await this.props.mutate({ // todo
      variables: {
      	input:{ name, email, address, phoneNumber,rcNumber, password }
      },
    });

    // const { ok, errors } = response.data.register;

    // if (ok) {
    //   return <Redirect to="/companydashboard" />
    // } else {
    //   const err = {};
      
    //   console.log("The errors found",errors)

    //   // this.setState(err);
    // }

    console.log(response);
};



onChange = e => {
    const { name, value } = e.target;
    // name = "email";
    if(name === "termsAndPolicies"){
    	alert("got me!")
    }
    this.setState({ [name]: value });
};


	render(){
		//  destructure values from state
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
								<label style={formStyle} htmlFor="name">Name of Company (As it appears on CAC Documents)</label>
								<input type="text" className="form-control" name="name" placeholder="Enter Name" onChange={this.onChange} value={name} />
							</div>


							<div className="form-group">
								<label style={formStyle} htmlFor="address">Business Address</label>
								<input type="text" className="form-control" name="address" placeholder="Enter Your Address" onChange={this.onChange} value={address} />
							</div>
							

							<div className="form-group">
								<label style={formStyle} htmlFor="rcNumber">RC Number</label>
								<input type="text" className="form-control" name="rcNumber" placeholder="eg 123456" onChange={this.onChange} value={rcNumber} />
							</div>

							<div className="form-group">
								<label style={formStyle} htmlFor="email">Email Address</label>
								<input type="text" className="form-control" name="email" placeholder="Another input" onChange={this.onChange} value={email} />
							</div>

							<div className="form-group">
								<label style={formStyle} htmlFor="phoneNumber">Phone Number</label>
								<input type="text" className="form-control" name="phoneNumber" placeholder="e.g 0800000000000" onChange={this.onChange} value={phoneNumber} />
							</div>

							<div className="form-group">
								<label style={formStyle} htmlFor="password">Password</label>
								<input type="text" className="form-control" name="password" placeholder="Enter password" onChange={this.onChange} value={password} />
							</div>

						  	<div className="form-check">
								<input className="form-check-input" type="checkbox" name="termsAndPolicies" onChange={this.onChange} value={termsAndPolicies} />
								<label className="form-check-label" htmlFor="termsAndPolicies">
									<span className="text-muted">I accept the</span><span style={formStyle}> Terms & Policies</span>
								</label>
							</div>

						  <div className="d-flex justify-content-center align-items-center mt-5">
						  	<button onClick={this.onSubmit} style={btnStyle} className="btn btn-lg btn-block btn-custom">Sign Up </button>
						  </div>

						</form>
					</div>
				</Authentication>
			</>
		)
	}
}

export default graphql(COMPANY_REGISTRATION)(Registration)