import React, {useState} from 'react';
import {motion} from "framer-motion";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import Link from "next/link";
import styles from "./category-card.module.css";

const CategoryCard = ({category}) => {
	const [cardHovered, setCardHovered] = useState(false);
	
	return (
		<Link
			onMouseEnter={() => setCardHovered(true)}
			onMouseLeave={() => setCardHovered(false)}
			className={styles.category__root}
			href={"/products/" + category.category_value}
			key={category.category_value}>
			
			<h3 className={styles.category__title}>{category.category_name}</h3>
			<div className={styles.category__wrap}>
				<div className={styles.category__desc}>
					<p>{category.description}</p>
				</div>
				{/*<div className={styles.category__arrow}>*/}
				{/*	<HiOutlineArrowNarrowRight/>*/}
				{/*</div>*/}
				<motion.div
					animate={{
						x: cardHovered ? [0, 10, 0] : [0,0,0],
					}}
					transition={{
						duration: 1,
						ease: "linear",
						repeat: Infinity
					}}
				>
					<div className={styles.category__arrow}>
						<HiOutlineArrowNarrowRight/>
					</div>
				</motion.div>
			</div>
		</Link>
	);
};

export default CategoryCard;
