import React from 'react';
import {getCategoriesFx} from "@/app/api/categories";
import {getOneProductFx} from "@/app/api/products";
import Head from "next/head";
import {Grid} from "@mantine/core";
import ProductPageT from "@/components/templates/ProductPage/ProductPageT";

const ProductPage = ({product}) => {
	const {product_name} = product
	return (<>
		<Head>
			<title>{product_name} | TechnoComfort</title>
			<meta name="description" content={`${product_name}| Online Store`}/>
		</Head>
		<ProductPageT product={product}/>
	</>);
};

export async function getServerSideProps({params}) {
	const queryProductVendor = params.vendor; // Отримуємо значення параметра з шляху
	// console.log("queryProductVendor SSR:", queryProductVendor)
	try {
		const product = await getOneProductFx(queryProductVendor); // Викликаємо функцію для отримання продукту
		return {props: {product}}; // Передаємо продукт як props у компонент
	} catch (error) {
		console.error('SSR Error fetching categories:', error);
		return {props: {product: {}}}; // Повертаємо пустий масив у випадку помилки
	}
}

export default ProductPage;
