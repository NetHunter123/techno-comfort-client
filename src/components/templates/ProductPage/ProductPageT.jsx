import React from 'react';
import {Button, Grid, Table} from "@mantine/core";
import styles from "./product-page.module.css";
import ProductImages from "@/components/modules/ProductImages/ProductImages";
import {$cartStore, addToCart, removeFromCart} from "@/context/cart";
import {useUnit} from "effector-react";
import {BsCartDash, BsCartPlus} from "react-icons/bs";

const ProductPageT = ({product}) => {
	const {product_name, images, in_stock, vendor_code, price, description, product_characteristics} = product
	const cart = useUnit($cartStore);
	const addToCartProvider = useUnit(addToCart)
	const removeFromCartProvider = useUnit(removeFromCart)
	const isInCart = cart.find(item => +item.id === +product.id) !== undefined;
	
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
		<section className={`${styles.product__root} section-c`}>
			<Grid className={styles.product__top}>
				<Grid.Col span={{lg: 5, md: 5, sm: 12, base: 12}}>
					<div className={styles.product__images}>
						<ProductImages images={images}/>
					</div>
				</Grid.Col>
				<Grid.Col span={{lg: 7, md: 7, sm: 12, base: 12}}>
					<div className={styles.product__info}>
						<h3 className={styles.product__title}>{product_name}</h3>
						<div className={styles.product__info_inner}>
							<div className={styles.product__stock_info}>
								<p className={styles.product__available}>Наявно на складі: <span> {in_stock}</span></p>
								<div className={styles.product__bage}>Є в наявності</div>
							</div>
							<p className={styles.product__vendor}>Код: {vendor_code}</p>
						</div>
						<div className={styles.product__control}>
							<p className={styles.product__price}>{price} UAH</p>
							<Button className={styles.product__cart_btn} onClick={() => {
								handleCartChange()
							}}>
								<p> Додати в кошик</p> {!isInCart ? <span><BsCartPlus/></span> : <span><BsCartDash/></span>
							}
							</Button>
						</div>
						
						<div className={styles.product__desc}>
							<h4 className={styles.product__subtitle}>Опис:</h4>
							<p className={styles.product__desc__text}>{description}</p>
						</div>
					</div>
				</Grid.Col>
			</Grid>
			<Grid grow className={styles.product__bottom}>
				<Grid.Col span={12}>
					<div className={styles.product__bottom_inner}>
						<h4 className={styles.product__subtitle}>Характеристики</h4>
						<Table striped highlightOnHover withTableBorder>
							<Table.Caption>Перед покупкою завжди уточнюйте комплектацію у менеджера</Table.Caption>
							<Table.Thead>
								<Table.Th>Властивість</Table.Th>
								<Table.Th>Значення</Table.Th>
							</Table.Thead>
							<Table.Tbody>
								{product_characteristics.map((element) => (
									<Table.Tr key={element.fieldKey}>
										<Table.Td>{element.field}</Table.Td>
										<Table.Td>{element.value}</Table.Td>
									</Table.Tr>
								))
								}
							</Table.Tbody>
						</Table>
					</div>
				</Grid.Col>
			</Grid>
		</section>
	);
};

export default ProductPageT;
