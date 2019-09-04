import React from 'react';

// components


const CompanyDashboard = () => {
	return (
		<>
			<section className="container-fluid">
				<div className="row">
					<article className="col-sm-12 p-md-3 p-sm-2">
						<div className="d-flex flex-sm-column flex-md-row">
							<img src="#" />
							<p className="mx-md-4"><strong>Dashbaord &#124; Book</strong></p>

							<div className="ml-auto">
								<input className="" placeholder="Jul 31, 2019" />
							</div>
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
							      			<img src="#" />
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
							      			<img src="#" />
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
							      			<img src="#" />
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

											<div class="progress m-md-3">
											  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
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
							<div className="col-sm-12">
								<div className="card w-100">
									<div className="card-body">

										<table>
											<thead>
												Vehicle Listed
											</thead>

											<tr>
												<td></td>
												<td>Type of Vehicle</td>
												<td>Vehicle Model</td>
												<td>Route</td>
												<td>Price</td>
												<td>Departing Time</td>
												<td>Seats Available</td>
												<td>Status</td>
												<td></td>
												<td></td>
											</tr>

											<tr>
												<td></td>
												<td>Toyota Hiace</td>
												<td>2007 XML 9</td>
												<td>Lagos-Abuja</td>
												<td>N13, 000</td>
												<td>4:00am</td>
												<td>12</td>
												<td>Left</td>
												<td>i</td>
												<td>x</td>
											</tr>
										</table>

									</div>
								</div>
							</div>
						</div>
					</article>

				</div>
			</section>
		</>
	);
}


export default CompanyDashboard;