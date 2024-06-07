import React, {useState} from 'react';
import styles from './header.module.css';
import Logo from "@/components/modules/Logo/Logo";
import {Button} from "@mantine/core";
import ShoppingCart from "@/components/modules/ShopingCart/ShoppingCart";
import {useMediaQuery} from "@mantine/hooks";
import AccountMenu from "@/components/elements/Btns/AccountMenu/AccountMenu";
import SignInBtn from "@/components/elements/Btns/SignInBtn/SignInBtn";

const Header = () => {
	const [login, setLogin] = useState(false);
	return (
		<div className={styles.header__wrap}>
			<header className={styles.header}>
				<div className={styles.header__logo}>
					<Logo/>
				</div>
				<div className={styles.header__control}>
					<ShoppingCart/>
					{login ? <AccountMenu/> :
						<SignInBtn/>
					}
				</div>
			</header>
		</div>
	);
};

export default Header;
