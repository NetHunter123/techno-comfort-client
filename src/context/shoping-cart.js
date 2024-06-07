// import {createDomain} from "effector";
//
// const shoppingCart = createDomain()
//
// export const setShoppingCart = shoppingCart.createEvent()
// export const updateShoppingCart = shoppingCart.createEvent()
// export const removeShoppingCartItem = shoppingCart.createEvent()
// export const setTotalPrice = shoppingCart.createEvent()
// export const setDisableCart = shoppingCart.createEvent()
// export const updateCartItemTotalPrice = shoppingCart.createEvent()
// export const updateCartItemCount = shoppingCart.createEvent()
//
// const remove = (cartItems, partId) =>
// 	cartItems.filter((item) => item.partId !== partId)
//
// function updateCartItem(
// 	cartItems,
// 	partId,
// 	payload
// ) {
// 	return cartItems.map((item) => {
// 		if (item.partId === partId) {
// 			return {
// 				...item,
// 				...payload,
// 			}
// 		}
//
// 		return item
// 	})
// }
//
// export const $shoppingCart = shoppingCart
// 	.createStore([])
// 	.on(setShoppingCart, (_, shoppingCart) => shoppingCart)
// 	.on(updateShoppingCart, (state, cartItem) => [...state, cartItem])
// 	.on(removeShoppingCartItem, (state, partId) => [...remove(state, partId)])
// 	.on(updateCartItemTotalPrice, (state, { partId, total_price }) => [
// 		...updateCartItem(state, partId, { total_price }),
// 	])
// 	.on(updateCartItemCount, (state, { partId, count }) => [
// 		...updateCartItem(state, partId, { count }),
// 	])
//
// export const $totalPrice = shoppingCart
// 	.createStore(0)
// 	.on(setTotalPrice, (_, value) => value)
//
// export const $disableCart = shoppingCart
// 	.createStore(false)
// 	.on(setDisableCart, (_, value) => value)
