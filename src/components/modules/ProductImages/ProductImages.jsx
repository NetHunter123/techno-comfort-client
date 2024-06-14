import React from 'react';
import CustomThumbSlider from "@/components/modules/ProductImages/carousel/CustomThumbSlider";

const ProductImages = ({images}) => {
	const imagesList = JSON.parse(images)
	
	return (
		<>
			<CustomThumbSlider slides={imagesList}  />
		</>
	);
};

export default ProductImages;
