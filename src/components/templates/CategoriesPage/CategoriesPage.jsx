import React, {useEffect, useState} from 'react';
import styles from './categories-page.module.css';
import {getBestsellersOrNewProductsFx} from "@/app/api/products";
import {toast} from "react-toastify";
import {getCategoriesFx} from "@/app/api/categories";
import {Grid, Skeleton} from "@mantine/core";
import ProductCard from "@/components/elements/ProductCard/ProductCard";
import Link from "next/link";
import {MdArrowRightAlt} from "react-icons/md";
import {GoArrowRight} from "react-icons/go";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import {motion} from "framer-motion"
import CategoryCard from "@/components/elements/CategotyCard/CategoryCard";

const CategoriesPage = () => {
	const [loading, setLoading] = useState(true)
	const [categories, setCategories] = useState([])
	
	useEffect(() => {
		loadCategories()
	}, []);
	
	const loadCategories = async () => {
		try {
			setLoading(true)
			const categories = await getCategoriesFx(`/categories`)
			setCategories(categories.rows)
			
		} catch (error) {
			setCategories(false)
			console.log(error)
			toast.error(error.message)
		} finally {
			setLoading(false)
		}
	}
	

	
	console.log("All categories ", categories)
	return (
		
		<section className={`${styles.categories__root} section-c`}>
			
			<h2 className={'section_title'}>Категорії</h2>
			<Grid justify="center">
				{loading ?
					[...Array(6)].map(() => (
						<Grid.Col span={{xs: 12, sm: 6,}}>
							<Skeleton className={styles.categories__sceleton} visible={loading} />
						</Grid.Col>
					))
					: categories ? categories.map((category) => {
						return (
							<Grid.Col span={{xs: 12, sm: 6,}} >
								<CategoryCard category={category}/>
							</Grid.Col>
						)
					}) : <h2 className={styles.categories__err_txt}>Категорії відсутні, або щось пішло не так.</h2>
				}
			</Grid>
		</section>
	);
};

export default CategoriesPage;
