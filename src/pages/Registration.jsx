import React from 'react';
import { Redirect } from 'react-router-dom';
import ApolloClient, { gql } from "apollo-boost";

// components
import RegForm from '../components/RegForm';
import Authentication from '../components/Authentication';

// images
import bgImage from '../images/registration.svg';

// pages
import Title from '../components/Title';


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


class Registration {

	state = {
		name: '',
		email: '',
		address: '',
		password: '',
		rcNumber: '',
		phoneNumber: ''
	}

	// methods
	
onSubmit = async () => {
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
    });

    const { username, email, password } = this.state;
    const response = await this.props.mutate({
      variables: { username, email, password },
    });

    const { ok, errors } = response.data.register;

    if (ok) {
      return <Redirect to="/companydashboard" />
    } else {
      const err = {};
      
      console.log("The errors found",errors)

      this.setState(err);
    }

    console.log(response);
};



onChange = e => {
    const { name, value } = e.target;
    // name = "email";
    this.setState({ [name]: value });
};


	render(){

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
						<RegForm />
					</div>
				</Authentication>
			</>
		)
	}
}


// Grapql queries
const client = new ApolloClient({
  uri: 'http://206.189.22.170/',
})


export default Registration;