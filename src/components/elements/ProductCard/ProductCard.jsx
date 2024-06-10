import React from 'react';
import styles from './product-card.module.css';
import {useMediaQuery} from "@mantine/hooks";
import {useUnit} from "effector-react/effector-react.mjs";
import {$cartStore, addToCart, removeFromCart} from "@/context/cart";
import {BsCartDash, BsCartPlus} from "react-icons/bs";


const ProductCard = ({product}) => {
	const isMedia567 = useMediaQuery('(min-width: 567px)')
	const addToCartProvider = useUnit(addToCart)
	const removeFromCartProvider = useUnit(removeFromCart)
	
	const cart = useUnit($cartStore);
	const isInCart = cart.find(item => +item.id === +product.id) !== undefined;
	let firstImage = JSON.parse(product.images)[0]
	
	
	const handleAddToCart = () => {
		addToCartProvider(product)
	}
	const handleRemoveToCart = () => {
		removeFromCartProvider(product.id)
	}
	
	const handleCartChange = () => {
		if (isInCart) {
			handleRemoveToCart(product.id)
		} else handleAddToCart(product);
	}
	
	
	return (
		<div className={styles.product_card}>
			<div className={styles.product_card__info}>
				<img className={styles.product_card__img} src={firstImage} alt={product.product_name}/>
				<div className={styles.product_card__details}>
					<div className={styles.product_card__inner}>
						<span className={styles.product_card__name}>{product.product_name}</span>
						<span className={styles.product_card__producer}>{product.producer.producer_name}</span>
					</div>
					<div className={styles.product_card__available}>Available now : <span>{product.in_stock}</span></div>
				</div>
			</div>
			<div className={styles.product_card__btn}
			     onClick={() => {
				     handleCartChange()
			     }}
			>
				<div className={styles.product_card__cart}>
					<span className={styles.product_card__price}>${product.price}</span>
					<span className={styles.product_card__add_to_cart}>
              {/*<span>Add in cart</span>*/}
						{!isInCart ? <span><BsCartPlus/></span> : <span><BsCartDash/></span>
						}
					</span>
				</div>
			</div>
		</div>
	)
		;
};

export default ProductCard;
