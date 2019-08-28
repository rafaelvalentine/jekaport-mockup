import React from 'react';

// images
import VehiclePhoto from '../images/VehiclePhoto.svg';
import BookVehicleImage from '../images/BookVehicleImage.svg';

// components

const carouselStyle = {
	box: {
		background: "#FFFFFF",
		border: "1px solid rgba(0, 0, 0, 0.5)",
		boxSizing: "border-box",
		borderRadius: "15px"
	},
	detailsTitle:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "10px",
		lineHeight: "0px",
		color: "#1B98E0"
	},
	details: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "12px"
	},
	btn:{
		background: "#006494",
		borderRadius: "5px",
		color: "#FFFFFF"
	}
}


const SearchResultCarousel = () => {
	return (
		<>
			<div className="row pb-md-4">
				{/*<span className="d-flex align-self-center">&lt;</span>*/}
				{/* the only carousel model to use. It woud be looped through to render severally*/}
				<div className="col-sm-4">
					<div style={carouselStyle.box} className="card">
						<div className="card-body">
							<article className="d-flex justify-content-between">
								{/*image woud dynamically get src from search result*/}
								<img src={BookVehicleImage} alt="" />
								<div>
								<section className="d-flex justify-content-around" >
									<div className="p-0" >
										<div className="my-3 mx-1">
											{/*both titles and detals would be dynamic a refactor is needed children props would be used*/}
											<h6 style={carouselStyle.detailsTitle}><strong>Car Model:</strong></h6>
											<span style={carouselStyle.details}>detailc</span>
										</div>

										<div className="my-3 mx-1">
											<h6 style={carouselStyle.detailsTitle}><strong>Price:</strong></h6>
											<span style={carouselStyle.details}>details</span>
										</div>
									</div>

									<div className="p-0">
										<div className="my-3 mx-1">
											<h6 style={carouselStyle.detailsTitle}><strong>Departing:</strong></h6>
											<span style={carouselStyle.details}>details</span>
										</div>

										<div className="my-3 mx-1">
											<h6 style={carouselStyle.detailsTitle}><strong>Seats</strong></h6>
											<span style={carouselStyle.details}>details</span>
										</div>
									</div>
								</section>
								<button style={carouselStyle.btn} className="btn btn-sm btn-block">Book Now</button>
								</div>
							</article>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div style={carouselStyle.box} className="card">
						<div className="card-body">
							<article className="d-flex justify-content-between">
								{/*image woud dynamically get src from search result*/}
								<img src={BookVehicleImage} alt="" />
								<div>
								<section className="d-flex justify-content-around" >
									<div className="p-0" >
										<div className="my-3 mx-1">
											{/*both titles and detals would be dynamic a refactor is needed children props would be used*/}
											<h6 style={carouselStyle.detailsTitle}><strong>Car Model:</strong></h6>
											<span style={carouselStyle.details}>detailc</span>
										</div>

										<div className="my-3 mx-1">
											<h6 style={carouselStyle.detailsTitle}><strong>Price:</strong></h6>
											<span style={carouselStyle.details}>details</span>
										</div>
									</div>

									<div className="p-0">
										<div className="my-3 mx-1">
											<h6 style={carouselStyle.detailsTitle}><strong>Departing:</strong></h6>
											<span style={carouselStyle.details}>details</span>
										</div>

										<div className="my-3 mx-1">
											<h6 style={carouselStyle.detailsTitle}><strong>Seats</strong></h6>
											<span style={carouselStyle.details}>details</span>
										</div>
									</div>
								</section>
								<button style={carouselStyle.btn} className="btn btn-sm btn-block">Book Now</button>
								</div>
							</article>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div style={carouselStyle.box} className="card">
						<div className="card-body">
							<article className="d-flex justify-content-between">
								{/*image woud dynamically get src from search result*/}
								<img src={BookVehicleImage} alt="" />
								<div>
								<section className="d-flex justify-content-around" >
									<div className="p-0" >
										<div className="my-3 mx-1">
											{/*both titles and detals would be dynamic a refactor is needed children props would be used*/}
											<h6 style={carouselStyle.detailsTitle}><strong>Car Model:</strong></h6>
											<span style={carouselStyle.details}>detailc</span>
										</div>

										<div className="my-3 mx-1">
											<h6 style={carouselStyle.detailsTitle}><strong>Price:</strong></h6>
											<span style={carouselStyle.details}>details</span>
										</div>
									</div>

									<div className="p-0">
										<div className="my-3 mx-1">
											<h6 style={carouselStyle.detailsTitle}><strong>Departing:</strong></h6>
											<span style={carouselStyle.details}>details</span>
										</div>

										<div className="my-3 mx-1">
											<h6 style={carouselStyle.detailsTitle}><strong>Seats</strong></h6>
											<span style={carouselStyle.details}>details</span>
										</div>
									</div>
								</section>
								<button style={carouselStyle.btn} className="btn btn-sm btn-block">Book Now</button>
								</div>
							</article>
						</div>
					</div>
				</div>
				{/*<span className="d-flex align-self-center">&gt;</span>*/}
			</div>
		</>
	);
}


export default SearchResultCarousel;