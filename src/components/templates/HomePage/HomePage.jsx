import React, {useEffect, useState} from 'react';
import MainHero from "@/components/modules/MainHero/MainHero";
import {getBestsellersOrNewProductsFx} from "@/app/api/products";
import {toast} from "react-toastify";
import ProductCard from "@/components/elements/ProductCard/ProductCard";
import ProductsSlider from "@/components/modules/ProductsSlider/ProductsSlider";
import MainSlick from "@/components/modules/MainHero/MainSlick";

const HomePage = () => {
	// const [newProducts, setNewProducts] = useState([])
	// const [newBestseller, setBestseller] = useState([])
	//
	// const loadProducts = async () => {
	// 	try {
	// 		const newProducts = await getBestsellersOrNewProductsFx("/products/new")
	// 		const bestsellers = await getBestsellersOrNewProductsFx("/products/bestsellers")
	// 		setNewProducts(newProducts)
	// 		setBestseller(bestsellers)
	//
	// 	} catch (error) {
	// 		console.log(error)
	// 		toast.error(error.message)
	// 	}
	// }
	//
	// useEffect(() => {
	// 	loadProducts()
	// }, []);
	
	const [loading, setLoading] = useState(true)
	const [productsOffer, setProductsOffer] = useState([ ])
	
	const loadProducts = async () => {
		try {
			setLoading(true)
			const products = await getBestsellersOrNewProductsFx(`/products/new`)
			setProductsOffer(products.rows)
			
		} catch (error) {
			console.log(error)
			toast.error(error.message)
		} finally {
			setLoading(false)
		}
	}
	
	useEffect(() => {
		loadProducts()
	}, []);
	
	
	return (
		<>
			{/*<MainSlick/>*/}
			<MainHero/>
			<ProductsSlider title={"Хіт продаж"} offerSrc={"/products/bestsellers"}/>
			<ProductsSlider title={"Новинки"} offerSrc={"/products/new"}/>
		</>
	);
};

export default HomePage;
