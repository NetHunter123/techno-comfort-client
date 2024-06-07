import {createEffect} from "effector";
import api from "../axiosClient";

export const getCategoriesFx = createEffect(async (url) => {
	try {
		const {data} = await api.get(url);
		return data
	} catch (err) {
		console.log(err)
	}
})
