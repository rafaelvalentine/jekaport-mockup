import React, { Component } from 'react';

// apollo
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';

// components
import Authentication from '../components/Authentication';

// images
import bgImage from '../images/Login.svg';
import bgImageMobile from '../images/LoginMobile.svg';

// pages
import Title from '../components/Title';

const styles = {
	formStyle: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		lineHeight: "21px",
		color: "#006494"
	},
	LoginTitleStyle: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "36px",
		lineHeight: "42px",
		color: "#006494"
	},
	btnStyle: {
		background: "#006494",
		backdropFilter: "blur(4px)",
		borderRadius: "5px",
		borderColor: "#006494",
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


const LOGIN_MUTATION = gql`
  mutation LoginMutation ($email: String!, $password: String!) {
    login ( input: { email: $email, password: $password }) {
      token
    }
  }
`;


class LoginAuth extends Component  {

	state = {
		email: '',
		password: ''
	}

	// methods	
	onChange = event => { // destructure need properties from e.target
	    const { name, value } = event.target;
	    this.setState({ [name]: value });
	};


	saveClientData = token => {
		// store auth token to local storage
		// localStorage.setItem(AUTH_TOKEN, token);
		// redirect to dashboard
	    this.props.history.push("/companydashboard")
	}

	confirm_login = async data => {
		console.log(data)
		// grab token
		const { token } = data.login;
		// store token
		this.saveClientData(token);
	}


	render(){

		const { email, password } = this.state

		return (
			<>
				<Title 
					title="Welcome!" 
					classes="text-center"
					subClasses="text-center"
					subTitle="Signup today and enjoy unlimited patronage" 
					titleStyle={styles.titleStyle}
					subTitleStyle={styles.subTitleStyle}
				/>

				<section className="m-md-5 p-md-4 my-4 mx-4">
					<Authentication>
						<div className="col-md-6 my-4 d-flex justify-content-center align-items-center">
							<picture>
							  <source  media="(min-width: 1200px)" srcSet={bgImage} />
							  <source  media="(min-width: 992px)" srcSet={bgImage} />
							  <source  media="(min-width: 768px)" srcSet={bgImage} />
							  <source  media="(min-width: 576px)" srcSet={bgImageMobile} />
							  <source  media="(max-width: 575px)" srcSet={bgImageMobile} />
							  <img className="hidden-sm-down" alt="Login" style={{width:"auto"}} src={bgImage} />
							</picture>
						</div>

						<div style={styles.RegFormBorder} className="col-md-6 p-5">
							<form>

								<h2 className="text-center formHeader" style={styles.LoginTitleStyle} >Login</h2>

								<div className="form-group">
									<label className="mobileLable" style={styles.formStyle} htmlFor="emailAddress">Email Address</label>
									<input type="text" className="form-control" name="email" placeholder="Enter Email" onChange={this.onChange} value={email} />
								</div>


								<div className="form-group">
									<label className="mobileLable" style={styles.formStyle} htmlFor="password">Password</label>
									<input type="text" className="form-control" name="password" placeholder="Enter Password" onChange={this.onChange} value={password} />
								</div>

									<Mutation
							            mutation={LOGIN_MUTATION}
							            variables={{ email, password }}
							            onCompleted={data => this.confirm_login(data)}>
							            {(mutation) => (
											<div className="d-flex justify-content-center align-items-center mt-5">
												<button type="button" onClick={mutation} style={styles.btnStyle} className="btn btn-lg btn-block btn-custom">Sign In</button>
											</div>
										)}
								</Mutation>
							</form>
						</div>
					</Authentication>
				</section>
			</>
		)
	}
}

export default LoginAuth;