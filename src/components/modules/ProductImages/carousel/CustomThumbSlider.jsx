import React from 'react';
import Slider from "react-slick";
import ProductImagesSlide from "@/components/modules/ProductImages/carousel/ProductImagesSlide";
import ProductImagesThumb from "@/components/modules/ProductImages/carousel/ProductImagesThumb";
import styles from "./slider.module.css";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "red" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "green" }}
			onClick={onClick}
		/>
	);
}

const CustomThumbSlider = ({slides}) => {
	const settings = {
		customPaging: function (i) {
			return (
				<a>
					<ProductImagesThumb url={slides[i]}/>
					{/*<img src={slides[i].url} height={80} alt="test"/>*/}
				</a>
			);
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<div className={`slider-container ${styles.slider}`}>
			<Slider {...settings}>
				{slides.map((slide, i) => {
					return <ProductImagesSlide url={`${slide}`} key={i}/>
				})}
			</Slider>
		</div>
	);
};

export default CustomThumbSlider;
