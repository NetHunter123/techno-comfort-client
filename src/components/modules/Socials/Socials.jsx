import React from 'react';
import styles from './socials.module.css';
import {IoLogoFacebook, IoLogoInstagram} from "react-icons/io";
import {AiOutlineYoutube} from "react-icons/ai";
import {PiTelegramLogoLight} from "react-icons/pi";

const Socials = () => {
	
	const socials = [
		{icon: <IoLogoInstagram/>, value: 'Instagram', link: "#"},
		{icon: <IoLogoFacebook/>, value: 'Facebook', link: "#"},
		{icon: <AiOutlineYoutube/>, value: 'Youtube', link: "#"},
		{icon: <PiTelegramLogoLight/>, value: 'Telegram', link: "#"},
	]
	return (
		<div className={styles.socials}>
			{socials.map((social) => (
				<a className={styles.socials__btn} href={social.link} key={social.value}>
					{social.icon}
				</a>
			))}
		</div>
	);
};

export default Socials;
