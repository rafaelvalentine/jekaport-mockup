import React, { Component } from 'react';

// apollo
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';

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
		textAlign: "center",
		marginTop: "50px",
		paddingBottom: "10px"

	},

	subTitleStyle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#65617D",
		textAlign: "center",
		paddingBottom: "10px"
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


const FORGET_PASSWORD_MUTATION = gql`
  mutation Forget_Password_Mutation ( $email: String! ) {
    forgotPassword ( email: $email ) 
  }
`;


class ForgotPassword extends Component {

	state = {
		email: '',
		forgotPassword: false
	}


	// methods	
	onChange = event => { // destructure need properties from e.target
	    const { name, value } = event.target;
	    this.setState({ [name]: value });
	};

	confirm_reset = async data => {
		console.log(data)
		this.setState({
			forgotPassword: data.forgotPassword
		})
	}

	
	render(){

		const { email, forgotPassword } = this.state;

		return (
			<Password>
				<div className="col-sm-8 mx-auto">
					<div className="card justify-content-center p-5" style={styles.card} >
						<div className="card-body">
						{!forgotPassword && (
							<>
								<Title 
									title="Forgot Password?" 
									classes="text-center"
									subClasses="text-center"
									subTitle="Submit your email address and we will send you a link to reset your password" 
									titleStyle={styles.titleStyle}
									subTitleStyle={styles.subTitleStyle}
								/>


								<form>
									<div className="form-group">
										<label style={styles.formStyle} htmlFor="email">Email Address</label>
										<input type="email" className="form-control" name="email" placeholder="Enter Your Email Address" onChange={this.onChange} value={email} />
									</div>

									<Mutation
							            mutation={FORGET_PASSWORD_MUTATION}
							            variables={{ email }}
							            onCompleted={data => this.confirm_reset(data)}>
							            {(mutation) => (
											<div className="d-flex justify-content-center align-items-center mt-5 mb-3">
												<button type="button" onClick={mutation} style={styles.btnStyle} className="btn btn-lg btn-block btn-custom">Sign Up </button>
											</div>
										)}
									</Mutation>
								</form>
							</>
						)}

						{ forgotPassword && (
							<Title 
								title="Thank You!" 
								classes="text-center"
								subClasses="text-center"
								subTitle="A link has been sent to your mail" 
								titleStyle={styles.titleStyle}
								subTitleStyle={styles.subTitleStyle}
							/>
						)}
						</div>
					</div>
			    </div>
			</Password>
		);
	}
}


export default ForgotPassword;