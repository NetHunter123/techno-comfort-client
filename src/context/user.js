import {createDomain} from "effector";
import {checkAuthFx} from "@/app/api/auth";

let initialState = false
initialState = checkAuthFx()

const user = createDomain(initialState)
// Події для зміни стану користувача
export const setUser = user.createEvent();
export const clearUser = user.createEvent();


// Стан користувача
export const $userStore = user.createStore(null)
	.on(setUser, (_, user) => user)
	.reset(clearUser);



