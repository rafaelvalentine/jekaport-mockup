import React, { Component } from 'react';

// auth
import { AUTH_TOKEN } from '../constants'


class CompanyDashboard extends Component {

	render(){
		// grab auth token from localstorage
		const authToken = localStorage.getItem(AUTH_TOKEN)

		return (
			<>
				<section className="container-fluid">
					<div className="row">
						<article className="col-sm-12 p-md-3 p-sm-2">
							<div className="d-flex flex-sm-column flex-md-row">
								<img src="" alt="" />
								<p className="mx-md-4"><strong>Dashbaord &#124; Book</strong></p>

								<div className="ml-auto">
									<input className="" placeholder="Jul 31, 2019" />
								</div>
								{authToken && (
									<span 
										onClick={() => {
											localStorage.removeItem(AUTH_TOKEN) 
											this.props.history.push(`/login`)
									}}>
										Logout
									</span>
								)}
							</div>
						</article>

						<article className="col-sm-12 px-md-5 px-sm-2 py-md-4 py-sm-2">
							<div className="row">
								<div className="col-md-4 col-sm-12">
									<div className="card">
								      <div className="card-body">

								      	<section className="d-flex flex-md-row flex-column justify-content-around text-center">
								      		<div>
								      			<p>TODAY</p>
								      			<img src="" alt="" />
								      		</div>

								      		<div>
								      			<p>560</p>
								      			<p>Vehicle Listed</p>
								      		</div>
								      	</section>
								        
								      </div>
								    </div>
								</div>


								<div className="col-md-4 col-sm-12">
									<div className="card">
								      <div className="card-body">

								      	<section className="d-flex flex-md-row flex-column justify-content-around text-center">
								      		<div>
								      			<p>TODAY</p>
								      			<img src="" alt="" />
								      		</div>

								      		<div>
								      			<p>560</p>
								      			<p>Vehicle Listed</p>
								      		</div>
								      	</section>
								        
								      </div>
								    </div>
								</div>


								<div className="col-md-4 col-sm-12">
									<div className="card">
								      <div className="card-body">

								      	<section className="d-flex flex-md-row flex-column justify-content-around text-center">
								      		<div>
								      			<p>TODAY</p>
								      			<img src="" alt="" />
								      		</div>

								      		<div>
								      			<p>560</p>
								      			<p>Vehicle Listed</p>
								      		</div>
								      	</section>
								        
								      </div>
								    </div>
								</div>

							</div>
						</article>

						<article className="col-sm-12 p-md-3 p-sm-2">
							<div className="row">
								<div className="col-md-7 col-sm-12">
									<p><strong>GRAPH</strong></p>
								</div>

								<div className="col-md-5 col-sm-12">
									<div className="card">
										<div className="card-body">

											<section className="d-flex flex-column justify-content-around text-center">
												<p className="text-center">Custom Feedback</p>
												<p className="text-center">2,800</p>

												<div className="progress m-md-3">
												  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>

												<div className="d-flex flex-column flex-md-row justify-content-around mt-md-3">
													<div>
														<p>90%</p>
														<p>Positive</p>
													</div>

													<div>
														<p>10%</p>
														<p>Negative</p>
													</div>
												</div>
												
											</section>
										</div>
								    </div>
								</div>
							</div>
						</article>

						<article className="col-sm-12 p-md-3 p-sm-2">
							<div className="row">
								<div className="col-sm-12 table-responsive">

									<table className="table">
										
										<thead>
											<tr>
												<th colspan="7">
													Expand This To Full Table
												</th>
											</tr>
										</thead>
										
										<thead>
											<tr>
												<th scope="col">Again</th>
												<th scope="col">First</th>
												<th scope="col">Last</th>
												<th scope="col">Handle</th>
												<th scope="col">Handle</th>
												<th scope="col">Handle</th>
												<th scope="col">Handle</th>
											</tr>
										</thead>
									</table>

								</div>
							</div>
						</article>

					</div>
				</section>
			</>
		);
	}
}


export default CompanyDashboard;