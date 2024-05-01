import React from 'react';
import styles from './product-card.module.css';
import {Skeleton} from "@mantine/core";


const ProductCard = ({product}) => {
	
	
	return (
		<div className={styles.product_card}>
			<div className={styles.product_card__info}>
				<img className={styles.product_card__img} src={JSON.parse(product.images)[0]} alt={product.product_name}/>
				<div className={styles.product_card__details}>
					<div className={styles.product_card__inner}>
						<span className={styles.product_card__name}>{product.product_name}</span>
						<span className={styles.product_card__producer}>{product.producer.producer_name}</span>
					</div>
					<div className={styles.product_card__available}>Available now : <span>{product.in_stock}</span></div>
				</div>
			</div>
			<div className={styles.product_card__btn}>
				<a className={styles.product_card__cart} href="#">
					<span className={styles.product_card__price}>${product.price}</span>
					<span className={styles.product_card__add_to_cart}>
              <span>Add in cart</span>
            </span>
				</a>
			</div>
		</div>
	)
		;
};

export default ProductCard;
