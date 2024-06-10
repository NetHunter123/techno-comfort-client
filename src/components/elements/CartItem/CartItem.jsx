import React, {useState} from 'react';
import styles from './cart-item.module.css';
import {ActionIcon, TextInput} from "@mantine/core";
import {addToCart, decreaseQuantity, removeFromCart} from "@/context/cart";
import {useUnit} from "effector-react";
import {FaRegTrashCan} from "react-icons/fa6";

const CartItem = ({product}) => {
	let firstImage = JSON.parse(product.images)[0]
	const removeFromCartProvider = useUnit(removeFromCart)
	const increaseQuantityProvider = useUnit(addToCart)
	const decreaseQuantityProvider = useUnit(decreaseQuantity)
	const [count, setCount] = useState(1);
	
	return (
		<div className={styles.item}>
			<img className={styles.item__img} src={firstImage} alt={product.product_name}/>
			<div className={styles.item__info}>
				<div className={styles.item__info__top}>
					<h3 className={styles.item__title}>{product.product_name}</h3>
					<ActionIcon onClick={() => {
						removeFromCartProvider(product.id)
					}} variant="filled" color="var(--m-bg-200)" aria-label="minus">
						<FaRegTrashCan color={"var(--m-primary-200)"}/>
					</ActionIcon>
				</div>
				<div className={styles.item__inner}>
					<div className="">
						<p className={styles.item__price}>{product.quantity*product.price} UAH</p>
						<div className={styles.item__counter}>
							<ActionIcon onClick={() => {
								decreaseQuantityProvider(product)
							}} variant="filled" color="var(--m-primary-300)" aria-label="minus">
								-
							</ActionIcon>
							<TextInput
								readOnly={true}
								className={styles.item__input}
								value={product.quantity}
								variant="filled"
								placeholder="Input placeholder"
							/>
							<ActionIcon onClick={() => {
								increaseQuantityProvider(product)
							}} variant="filled" color="var(--m-primary-300)" aria-label="plus">
								+
							</ActionIcon>
						</div>
					</div>
					<p className={styles.item__in_stock}>наявно: {product.in_stock}</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
