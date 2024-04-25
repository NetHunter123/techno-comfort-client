import {useState} from 'react';
import Link from "next/link";
import {AiOutlineHome} from "react-icons/ai";
import {BiCategoryAlt} from "react-icons/bi";
import {FaPeopleRoof} from "react-icons/fa6";
import {MdOutlineContacts} from "react-icons/md";
import {LiaShippingFastSolid} from "react-icons/lia";
import {BsFillQuestionSquareFill} from "react-icons/bs";
import {HiOutlineSwitchHorizontal} from "react-icons/hi";
import {LuLogOut} from "react-icons/lu";
import styles from './navbar.module.css';
import {useRouter} from "next/router";

const menu = [
	{label: "Головна", link: "/", icon: AiOutlineHome},
	{label: "Категорії", link: "/category", icon: BiCategoryAlt},
	{label: "Про Нас", link: "/about-us", icon: FaPeopleRoof},
	{label: "Контакти", link: "/contacts", icon: MdOutlineContacts},
	{label: "Доставка та оплата", link: "/delivery-payment", icon: LiaShippingFastSolid},
	{label: "FAQ`s", link: "/faq", icon: BsFillQuestionSquareFill},
]

export function Navbar() {
	const [active, setActive] = useState('/');
	const router = useRouter()
	
	const isActive = (href) => router.pathname === href
	
	const links = menu.map((item) => (
		<li key={item.label}>
			<Link
				className={styles.link}
				data-active={isActive(item.link) || undefined}
				href={item.link}
				onClick={(event) => {
					// event.preventDefault();
					setActive(item.label);
				}}
			>
				<item.icon className={styles.linkIcon}/>
				<span>{item.label}</span>
			</Link>
		</li>
	));
	
	return (
		<div className={styles.navbar__wrap}>
			<nav className={`${styles.navbar}`}>
				<div className={`${styles.navbarMain} h-[100%]`}>
					{/*<Logo/>*/}
					<ul className={`${styles.links_wrap} `}>
						{links}
					</ul>
				</div>
				
				<div className={`${styles.footer} mt-auto`}>
					<Link href="#" className={styles.link} onClick={(event) => event.preventDefault()}>
						<HiOutlineSwitchHorizontal className={styles.linkIcon}/>
						<span>Change account</span>
					</Link>
					
					<Link href="#" className={styles.link} onClick={(event) => event.preventDefault()}>
						<LuLogOut className={styles.linkIcon}/>
						<span>Logout</span>
					</Link>
				</div>
			</nav>
		</div>
	);
}
