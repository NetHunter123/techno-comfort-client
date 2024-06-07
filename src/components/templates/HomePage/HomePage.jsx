import React, {useEffect, useState} from 'react';
import MainHero from "@/components/modules/MainHero/MainHero";
import {getBestsellersOrNewProductsFx} from "@/app/api/products";
import {toast} from "react-toastify";
import ProductCard from "@/components/elements/ProductCard/ProductCard";
import ProductsOffer from "@/components/modules/ProductsOffer/ProductsOffer";
import MainSlick from "@/components/modules/MainHero/MainSlick";

const HomePage = () => {
	
	return (
		<>
			<MainHero/>
			<ProductsOffer title={"Популярні товари"} offerSrc={"/products/bestsellers"}/>
			<ProductsOffer title={"Новинки"} offerSrc={"/products/new"}/>
		</>
	);
};

export default HomePage;
