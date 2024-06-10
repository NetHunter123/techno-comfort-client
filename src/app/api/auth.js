import api from '../axiosClient'
import {toast} from "react-toastify";
import {createEffect} from "effector";
import {setUser} from "@/context/user";

export const signUpFx = createEffect(async ({url, name, surname, password, email}) => {
	console.log("inputed", {url, name, surname, password, email})
	const {data} = await api.post(url, {name, surname, email, password})
	console.log("signUpFx fetched data", data)
	if (data.warningMessage) {
		toast.error(data.warningMessage)
	}
	
	toast.success("Реєстрація успішна, тепер авторизуйтесь для входу")
	return data
})

export const signInFx = createEffect(async ({url, password, email}) => {
	console.log("inputed", {url, password, email})
	const {data} = await api.post(url, {email, password})
	console.log("signInFx fetched data", data)
	if (data.warningMessage) {
		toast.error(data.warningMessage && "Не вірні дані!")
	}
	
	toast.success("Авторизація успішна, вдалих покупок!")
	return data
})

export const checkAuthFx = createEffect(async () => {
	try {
		const {data} = await api.get("/users/login-check")
		console.log("CheckAuthFx fetched data", data)
		return data
		// return true
	} catch (err) {
		return false
	}
})

export const logOutFx = createEffect(async () => {
	try {
		const {data} = await api.get("/users/logout")
		console.log("logOutFx fetched data", data)
		toast.warning("Акаунту покинуто")
		setUser(false)
		return false
	} catch (err) {
		setUser(false)
		return false
	}
})
