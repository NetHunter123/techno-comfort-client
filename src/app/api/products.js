import {createEffect} from "effector";
import api from "../axiosClient";

export const getBestsellersOrNewProductsFx = createEffect(async (url) => {
	const {data} = await api.get(url);
	
	return data
})
export const getProductsFx = createEffect(async (url) => {
	// try {
		const {data} = await api.get(url);
		return data
	// } catch (err) {
	// 	console.log(err)
	// }
})
export const getOneProductFx = createEffect(async (vendor) => {
	// try {
	const {data} = await api.get(`products/find/${vendor}`);
	return data
	// } catch (err) {
	// 	console.log(err)
	// }
})
