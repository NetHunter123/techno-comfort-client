import React, {useEffect, useState} from 'react';
import styles from './category_products.module.css';
import {getProductsFx} from "@/app/api/products";
import {$productsStore, setProducts} from "@/context/products";
import {useUnit} from "effector-react";
import {toast} from "react-toastify";
import {Skeleton} from "@mantine/core";
import ProductCard from "@/components/elements/ProductCard/ProductCard";
import {getCategoriesFx} from "@/app/api/categories";
import {$categoriesStore, setCategories} from "@/context/categories";
import SortSelect from "@/components/elements/SortSelect/SortSelect";
import ProductFilters from "@/components/modules/ProductFilters/ProductFilters";
import PaginationModule from "@/components/modules/Pagination/Pagination";


const CategoryProductsPage = ({queryCategory, currCategory}) => {
	const {id: categoryId} = currCategory
	const [url, setURL] = useState("");
	const [pageNumber, setPageNumber] = useState(1);
	const [limit, setLimit] = useState(10);
	
	const products = useUnit($productsStore)
	const setProductsFx = useUnit(setProducts)
	const [loading, setLoading] = useState(false)
	
	
	const [selectedFilters, setSelectedFilters] = useState({});
	
	// console.log("queryCategory", queryCategory)
	// console.log("category", currCategory)
	
	useEffect(() => {
		// setURL(`products/category/${categoryId}?limit=${limit}&pageNumber=${pageNumber}`)
		setURL(createUrl());
		
	}, [pageNumber, limit, selectedFilters]);
	
	useEffect(() => {
		if (url) {
			loadCategoryProducts(url)
		}
	}, [url]);
	
	const createUrl = () => {
		let filterQuery = Object.keys(selectedFilters)
			.map(key => {
				const values = selectedFilters[key];
				return `${key}=${values.join(',')}`;
			})
			.join("&");
		console.log("filterQuery created url", filterQuery)
		return `products?category=${categoryId}&limit=${limit}&pageNumber=${pageNumber}&${filterQuery}`;
	};
	
	const loadCategoryProducts = async (url) => {
		try {
			setLoading(true)
			const productsResponse = await getProductsFx(url);
			console.log("Every Loaded products", productsResponse);
			setProductsFx(productsResponse)
		} catch (error) {
			toast.error(error.message)
		} finally {
			setLoading(false)
		}
	}
	
	const handleSortChange = (filterKey, value) => {
		const updatedFilters = {...selectedFilters};
		
		if (!updatedFilters[filterKey]) {
			updatedFilters[filterKey] = [];
		}
		updatedFilters[filterKey][0] = value;
		setSelectedFilters(updatedFilters);
	}
	
	const handleFilterChange = (filterKey, value) => {
		const updatedFilters = {...selectedFilters};
		if (!updatedFilters[filterKey]) {
			updatedFilters[filterKey] = [];
		}
		if (updatedFilters[filterKey].includes(value)) {
			updatedFilters[filterKey] = updatedFilters[filterKey].filter(item => item !== value);
		} else {
			updatedFilters[filterKey].push(value);
		}
		if (updatedFilters[filterKey].length === 0) {
			delete updatedFilters[filterKey];
		}
		setSelectedFilters(updatedFilters);
	};
	
	return (
		<section className={`${styles.catalog__root} section-c`}>
			<h2 className={`${styles.catalog__title} section_title`}>{currCategory.category_name}</h2>
			<div className={styles.catalog__wrapper}>
				<div className={styles.catalog__products}>
					<div className={styles.catalog__topbar}>
						<SortSelect handleSortChange={handleSortChange}/>
					</div>
					<ul className={styles.products__wrap}>
						{loading && products.rows?.length ?
							[...Array(8)].map(() => (<Skeleton className={styles.products__sceleton} visible={true}>
								</Skeleton>
							))
							: products.rows?.length ? products.rows.map((product) => {
								return (<ProductCard key={product.vendor_code} product={product} loading={loading}/>)
							}) : <h2>Товари відсутні...</h2>
						}
					</ul>
						<PaginationModule pages={products.meta?.pages} activePage={pageNumber} setPageNumber={setPageNumber}/>
				</div>
				<div className={styles.catalog__filters}>
					<ProductFilters filtersJson={currCategory.filters} handleFilterChange={handleFilterChange}/>
				</div>
			</div>
		</section>
	)
		;
};


export default CategoryProductsPage;
