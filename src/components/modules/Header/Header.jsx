import React from 'react';
import styles from './header.module.css';
import Logo from "@/components/modules/Logo/Logo";

const Header = () => {
	return (
		<div className={styles.header__wrap}>
			<header className={styles.header}>
				<div className={styles.header__logo}>
					<Logo/>
				</div>
			</header>
		</div>
	);
};

export default Header;
