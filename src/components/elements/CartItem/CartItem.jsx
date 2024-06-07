import React, {useState} from 'react';
import styles from './cart-item.module.css';
import {ActionIcon, TextInput} from "@mantine/core";

const CartItem = ({product}) => {
	let firstImage = JSON.parse(product.images)[0]
	const [count, setCount] = useState(1);
	
	return (
		<div className={styles.item}>
			<img className={styles.item__img} src={firstImage} alt={product.product_name}/>
			<div className={styles.item__info}>
				<h3 className={styles.item__title}>{product.product_name}</h3>
				<div className={styles.item__inner}>
					<div className="">
						<p className={styles.item__price}>{product.price} UAH</p>
						<div className={styles.item__counter}>
							<ActionIcon variant="filled" color="var(--m-primary-300)" aria-label="minus">
								-
							</ActionIcon>
							<TextInput
								className={styles.item__input}
								value={count}
								variant="filled"
								placeholder="Input placeholder"
							/>
							<ActionIcon variant="filled" color="var(--m-primary-300)" aria-label="plus">
								+
							</ActionIcon>
						</div>
					</div>
					<p className={styles.item__in_stock}>available: {product.in_stock}</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
