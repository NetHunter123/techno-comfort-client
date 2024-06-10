import {useRef, useState} from 'react';
import Link from "next/link";
import {AiOutlineHome} from "react-icons/ai";
import {BiCategoryAlt} from "react-icons/bi";
import {FaPeopleRoof} from "react-icons/fa6";
import {MdOutlineContacts} from "react-icons/md";
import {LiaShippingFastSolid} from "react-icons/lia";
import {BsFillQuestionSquareFill} from "react-icons/bs";
import styles from './navbar.module.css';
import {useRouter} from "next/router";
import {IoMdArrowDropleft} from "react-icons/io";
import {useMediaQuery} from "@mantine/hooks";
import AuthBtn from "@/components/elements/Btns/AuthBtn/AuthBtn";

const menu = [
	{label: "Головна", link: "/", icon: AiOutlineHome},
	{label: "Каталог товарів", link: "/categories", icon: BiCategoryAlt},
	{label: "Про Нас", link: "/about-us", icon: FaPeopleRoof},
	{label: "Контакти", link: "/contacts", icon: MdOutlineContacts},
	{label: "Доставка та оплата", link: "/delivery-payment", icon: LiaShippingFastSolid},
	{label: "FAQ`s", link: "/faq", icon: BsFillQuestionSquareFill},
]

export function Navbar() {
	const isMedia567 = useMediaQuery('(min-width: 567px)')
	const [active, setActive] = useState('/');
	const [miniMobMenu, setMiniMobMenu] = useState(false);
	const router = useRouter()
	const asideWidthRef = useRef(null);
	
	const openMiniMenu = () => {
		setMiniMobMenu(prevCount => !prevCount)
	}
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
		<div ref={asideWidthRef}
		     className={`${styles.navbar__wrap} ${miniMobMenu && !isMedia567 ? styles.navbar__mini_mob_close : ""}`}>
			<nav className={`${styles.navbar}`}>
				<div className={`${styles.navbarMain}`}>
					<ul className={`${styles.links_wrap} `}>
						{links}
						{!isMedia567 &&
						<li style={{overflow: "hidden",display: "flex",alignItems: "center",justifyContent: "center",padding:"10px 0"}}>
							{!isMedia567 && <AuthBtn/>}
						</li>}
					</ul>
				</div>
				
				<button onClick={openMiniMenu} className={styles.navbar__btn_mini_menu}>
					<IoMdArrowDropleft/>
				</button>
			</nav>
		</div>
	);
}
