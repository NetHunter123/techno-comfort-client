import React, {useEffect, useState} from 'react';
import styles from './products-offer.module.css';
import ProductCard from "@/components/elements/ProductCard/ProductCard";
import {getBestsellersOrNewProductsFx} from "@/app/api/products";
import {toast} from "react-toastify";
import {Skeleton} from "@mantine/core";


const ProductsOffer = ({title, offerSrc}) => {
	const [loading, setLoading] = useState(true)
	const [productsOffer, setProductsOffer] = useState([])
	
	const loadProducts = async () => {
		try {
			setLoading(true)
			const products = await getBestsellersOrNewProductsFx(`${offerSrc}`)
			setProductsOffer(products.rows)
			
		} catch (error) {
			setProductsOffer(false)
			console.log(error)
			toast.error(error.message)
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		loadProducts()
	}, []);
	
	console.log("productsOffer", productsOffer)
	return (
		<section className={`${styles.products} section-c`}>
			<h2 className={"section_title"}>{title}</h2>
			<div className={styles.products__wapper}>
				{loading ?
					[...Array(4)].map(() => (<Skeleton className={styles.products__sceleton} visible={loading}>
						</Skeleton>
					))
					: productsOffer ? productsOffer.map((product) => {
						return (<ProductCard key={product.vendor_code} product={product} loading={loading}/>)
					}) : <h2>Продукти відсутні</h2>
				}
			</div>
		</section>
	)
		;
};

export default ProductsOffer;
