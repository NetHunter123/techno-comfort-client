import {combine, createDomain, createEvent, createStore} from "effector";


const products = createDomain()

export const setProducts = products.createEvent()
export const setProductsCheapFirst = products.createEvent()
export const setProductsExpensiveFirst = products.createEvent()
export const setProductsDefault = products.createEvent()

export const $productsStore = products.createStore({})
	.on(setProducts, (_, items) => items)
	.on(setProductsCheapFirst, (state) => ({...state, rows: state.rows.sort((a, b) => a.price - b.price)}))
	.on(setProductsExpensiveFirst, (state) => ({...state, rows: state.rows.sort((a, b) => b.price- a.price )}))
	.on(setProductsDefault, (_, items) => items)


