import React from 'react';

const card = {
	width: "662px",
	height: "451px",
	boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
	borderRadius: "15px"
}



const Passwords = ({children}) => {
	return (
		<>
			<section className="container">
				<div className="row vh-100 align-items-center">
					<div className="mx-auto">
					    <div className="card justify-content-center p-5" style={card} >
					      <div className="card-body">
					        {children}
					      </div>
					    </div>
				    </div>
				</div>				
			</section>
		</>
	);
}

export default Passwords;