import React from 'react';
import styles from './slide.module.css';

const ProductImagesThumb = ({url}) => {
	return (
			<img className={styles.thumb__img} src={url} alt={"thumb"}/>
	);
};

export default ProductImagesThumb;
