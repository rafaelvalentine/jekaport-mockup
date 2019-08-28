import React from 'react';

// images
import LionImage from '../images/LionImage.svg';


const carouselStyle = {
	title: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "14px",
		lineHeight: "16px",
		color: "#006494"
	},
	box: {
		background: "#FFFFFF",
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px"
	},
	boxText: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "20px",
		lineHeight: "23px",
		color: "rgba(0, 0, 0, 0.7)"
	},
	boxSubText: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "13px",
		lineHeight: "15px",
		color: "rgba(0, 0, 0, 0.7)"
	}
}


const Carousel = ({title}) => { // this corousel would take a children prop and receive its content dynamically in Home.jsx
	return (
		<div className="px-5">
			<h5 style={carouselStyle.title}>{title}</h5>

			<article className="d-flex">
				<span className="align-self-center">&lt;</span>
				<div class="row px-4">
					{/* the only carousel model to use. It woud be looped through to render severally*/}
					<div class="col-sm-4">
						<div class="card" style={carouselStyle.box}>
							<div class="card-body">
								<article className="d-flex flex-column flex-md-row">
									<img alt="Lions Transport Logo" src={LionImage} />
									<div>
										{/* all these content would be add dynamically and as children props*/}
										<h5 style={carouselStyle.boxText}>Lions Transport</h5>
										<p style={carouselStyle.boxSubText}>29 Adex Street, Lagos</p>
										<p style={carouselStyle.boxSubText}>## 234903426435, 2349012323232</p>
										{/* show sponsored tag from state*/}
									</div>
								</article>
							</div>
						</div>
					</div>

				  	<div class="col-sm-4">
						<div class="card" style={carouselStyle.box}>
							<div class="card-body">
								<article className="d-flex flex-column flex-md-row">
									<img alt="Lions Transport Logo" src={LionImage} />
									<div>
										<h5 style={carouselStyle.boxText}>Lions Transport</h5>
										<p style={carouselStyle.boxSubText}>29 Adex Street, Lagos</p>
										<p style={carouselStyle.boxSubText}>## 234903426435, 2349012323232</p>
									</div>
								</article>
							</div>
						</div>
					</div>

					<div class="col-sm-4">
						<div class="card" style={carouselStyle.box}>
							<div class="card-body">
								<article className="d-flex flex-column flex-md-row">
									<img alt="Lions Transport Logo" src={LionImage} />
									<div>
										<h5 style={carouselStyle.boxText}>Lions Transport</h5>
										<p style={carouselStyle.boxSubText}>29 Adex Street, Lagos</p>
										<p style={carouselStyle.boxSubText}>## 234903426435, 2349012323232</p>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
				<span className="align-self-center">&gt;</span>
			</article>
		</div>
	);
} 

export default Carousel;