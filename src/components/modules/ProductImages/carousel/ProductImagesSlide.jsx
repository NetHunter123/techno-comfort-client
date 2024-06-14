import React from 'react';
import styles from './slide.module.css';
import Zoom from 'react-medium-image-zoom'
const ProductImagesSlide = ({url}) => {
	return (
		<div className={styles.slide}>
			<Zoom>
				<img className={styles.slide__img} src={url} alt={"product image"}/>
			</Zoom>
		</div>
	);
};

export default ProductImagesSlide;
