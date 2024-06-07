import React from 'react';
import Logo from "@/components/modules/Logo/Logo";
import {Divider} from "@mantine/core";
import styles from './footer.module.css'
import Socials from "@/components/modules/Socials/Socials";

const Footer = () => {
	return (
		<footer className={`${styles.footer__root} section-c container-c`}>
			<div className={styles.footer__inner}>
				<div className={styles.footer__socials}>
					<Socials/>
				</div>
				
				<Divider className={styles.footer__divider} orientation="vertical" color={'var(--m-accent-400)'}/>
				
				<div className={styles.footer__logo}>
					<Logo/>
				</div>
			
			</div>
			
			<p className={styles.footer__all_right}>
				© {new Date().getFullYear()} TechnoComfort - online-store. All right reserved.
			</p>
		
		</footer>
	);
};

export default Footer;
