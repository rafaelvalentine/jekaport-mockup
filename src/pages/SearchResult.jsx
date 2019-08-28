import React from 'react';

// images
import SearchResultImage from '../images/SearchResultImage.svg';

// Components
import SearchResultCarousel from '../components/SearchResultCarousel';
import BookTripAsideForm from '../components/BookTripAsideForm';
import SponsoredCarousel from '../components/SponsoredCarousel';


const styles= {
	carousel: {
		background: "#FFFFFF",
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px"
	},
	title:{
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "20px",
		lineHeight: "23px",
		color: "rgba(0, 0, 0, 0.7)"
	}
}

const searchResult = () => {
	return (
		<section className="container-fluid">
			<div className="m-4">

				<article className="row d-flex justify-content-between">
					<div className="col-md-8">
						
						<div>
							{/*controlled search form*/}
							<strong>SEARCH FORM</strong>
						</div>

						<div style={styles.carousel} className="my-md-5">
							<article className="d-flex flex-row align-items-center p-2">
								{/*the image would be received dynamically from state.*/}
								<img alt="Transport company logo" src={SearchResultImage} />
								{/*the title would be received dynamically from state.*/}
								<h4 style={styles.title}>Fire Transport</h4>
							</article>

							<article className="d-flex justify-content-center align-items-center">
								<SearchResultCarousel />
							</article>
						</div>

						<div style={styles.carousel} className="my-md-5">
							<article className="d-flex flex-row align-items-center p-2">
								{/*the image would be received dynamically from state.*/}
								<img alt="Transport company logo" src={SearchResultImage} />
								{/*the title would be received dynamically from state.*/}
								<h4 style={styles.title}>Fire Transport</h4>
							</article>

							<article className="d-flex justify-content-center align-items-center">
								<SearchResultCarousel />
							</article>
						</div>

						<div style={styles.carousel} className="my-md-5">
							<article className="d-flex flex-row align-items-center p-2">
								{/*the image would be received dynamically from state.*/}
								<img alt="Transport company logo" src={SearchResultImage} />
								{/*the title would be received dynamically from state.*/}
								<h4 style={styles.title}>Fire Transport</h4>
							</article>

							<article className="d-flex justify-content-center align-items-center">
								<SearchResultCarousel />
							</article>
						</div>

					</div>

					<div className="col-md-4">
						<article className="p-4">
							<BookTripAsideForm />

							<SponsoredCarousel title="Milo Super Park" />
						</article>
					</div>
				</article>

			</div>
		</section>
	);
}


export default searchResult;