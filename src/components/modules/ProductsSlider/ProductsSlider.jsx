import React from 'react';
import styles from './products-slider.module.css';
import ProductCard from "@/components/elements/ProductCard/ProductCard";

const ProductsSlider = () => {
	return (
		<div className={styles.products__wapper}>
			<ProductCard/>
		</div>
	);
};

export default ProductsSlider;
