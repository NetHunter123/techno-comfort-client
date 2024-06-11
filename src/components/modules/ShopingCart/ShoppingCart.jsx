import React, {useEffect, useState} from 'react';
import {ActionIcon, Button, Drawer} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {BsCart2} from "react-icons/bs";
import styles from "./shopping-cart.module.css";
import Link from "next/link";
import {SlLogin} from "react-icons/sl";
import {IoIosArrowRoundForward} from "react-icons/io";
import CartItem from "@/components/elements/CartItem/CartItem";
import {useUnit} from "effector-react";
import {$cartStore, calculateTotalPrice, generateOrderSummary, getCartFx, setCart} from "@/context/cart";
import {$userStore, getUser, setUser} from "@/context/user";
import {useRouter} from "next/router";
import {toast} from "react-toastify";
import {checkAuthFx} from "@/app/api/auth";

const ShoppingCart = () => {
	const isMedia768 = useMediaQuery('(min-width: 768px)');
	const [opened, {open, close}] = useDisclosure(false);
	const cartIcon = <BsCart2 size={"20px"}/>
	const router = useRouter();
	const setCartP = useUnit(setCart);
	const cartItems = useUnit($cartStore);
	const user = useUnit($userStore);
	const setUserP = useUnit(setUser);
	
	
	useEffect(() => {
		if (typeof window !== 'undefined') {
			initializeCart();
		}
	}, [user]);
	
	const totalPrice = calculateTotalPrice(cartItems);
	const orderSummary = generateOrderSummary(cartItems);
	
	const initializeCart = async () => {
		
		// if (!user) {
		const savedCart = localStorage.getItem('shopping_cart');
		console.log("JSON.parse(savedCart)", JSON.parse(savedCart))
		if (savedCart) {
			setCartP(JSON.parse(savedCart));
		}
		// } else {
		// 	await getCartFx();
		// }
	};
	
	const handleConfirmOffer = async () => {
		// const check = await checkAuthFx()
		// setUserP(check)
		// if (check) {
		const orderProcess = router.pathname !== "/order-process"
		if (orderProcess) {
		close()
		router.push('/order-process');
		}else {
			toast.error("Ви вже на сторінці оформлення замовлення")
		}
		// } else {
		// 	toast.error("Будьласка авторизуйтесь для оформлення замовлення!")
		// }
	}
	
	const content = cartItems
		.map((product) => <CartItem product={product} key={product.id}/>);
	
	return (
		<>
			<Drawer
				className={styles.cart__drawer}
				opened={opened}
				onClose={close}
				size="md"
				position="right"
				title="Корзина"
				styles={{
					header: {
						color: "var(--m-accent-400)",
					},
					title: {
						fontSize: '24px',
						textAlign: 'center',
					},
					body: {
						height: "calc(100% - 60px)",
						padding: "0 0 15px 5px",
						// overflow: 'hidden',
						// backgroundColor: "aqua",
					},
					content: {
						padding: "0px",
						// height:"100%",
						// overflow: 'hidden',
						// backgroundColor: "red",
					}
				}}
				transitionProps={{transition: 'fade-left', duration: 200, timingFunction: 'easy-in-out'}}
			>
				<div className={styles.cart__content}>
					{content}
				</div>
				<div className={styles.cart__footer}>
					<p className={styles.cart__footer__total}>Загальна сума: {totalPrice}</p>
					<Button
						component={"button"}
						onClick={handleConfirmOffer}
						className={styles.order__button}
						variant="light"
						color="var(--m-accent-400)"
						rightSection={<IoIosArrowRoundForward/>}
						aria-label="sign-in"
						styles={{
							border: "1px solid var(--m-accent-400)"
						}}
					>
						Оформити замовлення
					</Button>
				</div>
			</Drawer>
			
			{/*{isMedia960 ?*/}
			<Button
				className={styles.cart__button}
				onClick={open}
				variant="light"
				color="var(--m-accent-400)"
				leftSection={isMedia768 && cartIcon}
				rightSection={cartItems.length}
				// rightSection={!cartItems.length ? cartItems.length : ""}
				aria-label="cart"
			>
				{isMedia768 ? "Корзина" : cartIcon}
			</Button>
		</>
	);
};

export default ShoppingCart;
