import React, {useState} from 'react';
import styles from './header.module.css';
import Logo from "@/components/modules/Logo/Logo";
import {Button} from "@mantine/core";
import ShoppingCart from "@/components/modules/ShopingCart/ShoppingCart";
import AccountMenu from "@/components/elements/Btns/AccountMenu/AccountMenu";
import AuthBtn from "@/components/elements/Btns/AuthBtn/AuthBtn";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const Header = () => {
	const [login, setLogin] = useState(false);
	const isMedia567 = useMediaQuery(567)
	
	return (
		<div className={styles.header__wrap}>
			<header className={styles.header}>
				<div className={styles.header__logo}>
					<Logo/>
				</div>
				<div className={styles.header__control}>
					<ShoppingCart/>
					{/*{login ? <AccountMenu/> :*/}
					{/*	<AuthBtn/>*/}
					{/*}*/}
					{!isMedia567 && <AuthBtn/>}
					
				</div>
			</header>
		</div>
	);
};

export default Header;
