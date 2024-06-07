import {combine, createDomain, createEvent, createStore} from "effector";


const categories = createDomain()

export const setCategories = categories.createEvent()

export const $categoriesStore = categories.createStore({}).on(setCategories,(_,items) =>items)


