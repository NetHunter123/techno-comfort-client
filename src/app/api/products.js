import {createEffect} from "effector";
import api from "../axiosClient";
export const getBestsellersOrNewProductsFx = createEffect(async (url)=>{
	const {data} = await api.get(url);
	
	return data
})
