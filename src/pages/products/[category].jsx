import React from 'react';
import {useRouter} from "next/router";
import CategoryProductsPage from "@/components/templates/CategoryProductPage/CategoryProductsPage";
import {getCategoriesFx} from "@/app/api/categories";

const Index = ({ categories, queryCategoryValue, currCategory }) => {
	// const router = useRouter();
	// const queryCategory = router.query.category
	return (
		<CategoryProductsPage queryCategory={queryCategoryValue} currCategory={currCategory} />
	);
};


export async function getServerSideProps({params}) {
	const queryCategoryValue = params.category; // Отримуємо значення параметра з шляху
	console.log("queryCategoryValue SSR:", queryCategoryValue)
	try {
		const categories = await getCategoriesFx('/categories'); // Викликаємо функцію для отримання категорій
		let currCategory = categories?.rows?.find(category => category.category_value === queryCategoryValue)
		console.log("current category id ssr:",currCategory.id)
		
		return { props: { categories, queryCategoryValue, currCategory } }; // Передаємо категорії як props у компонент CategoryPage
	} catch (error) {
		console.error('SSR Error fetching categories:', error);
		return { props: { categories: [], queryCategoryValue:"", currCategory:{} } }; // Повертаємо пустий масив у випадку помилки
	}
}

export default Index;
