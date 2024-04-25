import React, {useEffect, useState} from 'react';
import MainHero from "@/components/modules/MainHero/MainHero";
import {getBestsellersOrNewProductsFx} from "@/app/api/products";
import {toast} from "react-toastify";
import ProductCard from "@/components/elements/ProductCard/ProductCard";
import ProductsSlider from "@/components/modules/ProductsSlider/ProductsSlider";
import MainSlick from "@/components/modules/MainHero/MainSlick";

const HomePage = () => {
	const [newProducts, setNewProducts] = useState([])
	const [newBestseller, setBestseller] = useState([])
	
	const loadProducts = async () => {
		try {
			const newProducts = await getBestsellersOrNewProductsFx("/products/new")
			const bestsellers = await getBestsellersOrNewProductsFx("/products/bestsellers")
			setNewProducts(newProducts)
			setBestseller(bestsellers)
			
		} catch (error) {
			console.log(error)
			toast.error(error.message)
		}
	}
	
	useEffect(() => {
		loadProducts()
	}, []);
	
	console.log(newProducts)
	return (
		<>
			{/*<MainSlick/>*/}
			<MainHero/>
			<ProductsSlider/>
		</>
	);
};

export default HomePage;
