import React from 'react';
import Logo from "@/components/modules/Logo/Logo";
import {Divider} from "@mantine/core";
import styles from './footer.module.css'

const Footer = () => {
	return (
		<footer className={`${styles.footer__root} section-c container-c`}>
			{/*<Divider className={styles.footer__divider_hidden} orientation="vertical" color={"black"}/>*/}
			<div className={styles.footer__socials}>
				socials
			</div>
			
				<Divider className={styles.footer__divider_1} orientation="vertical" color={"black"}/>
			
			<div className={styles.footer__logo}>
				<Logo/>
			</div>
			
				<Divider className={styles.footer__divider_2} orientation="vertical" color={"black"}/>
			
			<p className={styles.footer__all_right}>
				© {new Date().getFullYear()} TechnoComfort - online-store. All right reserved.
			</p>
		
		</footer>
	);
};

export default Footer;
