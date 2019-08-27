import React from 'react';


const Carousel = ({title}) => {
	return (
		<div className="px-5">
			<h5>{title}</h5>

			<article className="d-flex justify-content-between">
				<span className="align-self-center">&lt;</span>
				<div class="row px-4">
					<div class="col-sm-4">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Special title treatment</h5>
								<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>

				  	<div class="col-sm-4">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Special title treatment</h5>
								<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>

					<div class="col-sm-4">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Special title treatment</h5>
								<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
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