import React from "react";
import Slider from "react-slick";

const MainSlick = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
			<div className="slider-container" style={{
				width: "100%",
			}}>
				<Slider {...settings}>
					<div style={{
						width: "100%",
					}}>
						<h3>1</h3>
					</div>
					
				</Slider>
			</div>
	);
};

export default MainSlick;
