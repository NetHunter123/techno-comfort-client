import {createDomain, sample} from 'effector';
import axios from 'axios';
import {setUser, clearUser, $userStore} from './user';

// Створення домену для кошика
const cartDomain = createDomain();

// Події для кошика
export const addToCart = cartDomain.createEvent();
export const removeFromCart = cartDomain.createEvent();
export const decreaseQuantity = cartDomain.createEvent();
export const setCart = cartDomain.createEvent();
export const clearCart = cartDomain.createEvent();

// Ефекти для взаємодії з API
export const saveCartFx = cartDomain.createEffect(async (cart) => {
	const response = await axios.post('/api/cart/save', cart);
	return response.data;
});

export const getCartFx = cartDomain.createEffect(async () => {
	const response = await axios.get('/api/cart');
	return response.data;
});

const initialCart = [];

// Стан кошика
export const $cartStore = cartDomain.createStore(initialCart)
	.on(addToCart, (state, product) => {
		console.log("addToCart",state)
		const existingProduct = state.find(item => item.id === +product.id);
		if (existingProduct) {
			return state.map(item =>
				item.id === +product.id ? {...item, quantity: item.quantity + 1} : item
			);
		}
		return [...state, {...product, quantity: 1}];
	})
	.on(decreaseQuantity, (state, product) => {
		return state.map(item => {
			if (item.id === +product.id) {
				const updatedQuantity = item.quantity - 1;
				return updatedQuantity > 0 ? {...item, quantity: updatedQuantity} : null;
			}
			return item;
		}).filter(item => item !== null);
	})
	.on(removeFromCart, (state, productId) => state.filter(item => item.id !== +productId))
	.on(clearCart, () => [])
	.on(setCart, (_, cart) => cart);

// Ефект для збереження кошика в локальному сховищі
export const saveCartToLocalStorageFx = cartDomain.createEffect((cart) => {
	if (typeof window !== 'undefined') {
		const user = $userStore.getState();
		if (!user) { // Перевірка, щоб уникнути збереження порожнього масиву
			localStorage.setItem('shopping_cart', JSON.stringify(cart));
		}
	}
});

sample({
	clock: [addToCart, removeFromCart, clearCart, setCart, decreaseQuantity],
	source: $cartStore,
	target: saveCartToLocalStorageFx ,
});

// Завантаження кошика з бази даних для зареєстрованих користувачів
// sample({
// 	clock: setUser,
// 	target: getCartFx,
// });

getCartFx.doneData.watch(cart => {
	setCart(cart);
});

// Очищення кошика при виході з аккаунту
// sample({
// 	clock: clearUser,
// 	target: clearCart,
// });

// Функція для підрахунку загальної суми товарів у кошику
export const calculateTotalPrice = (cart) => {
	return cart.reduce((total, item) => {
		return total + (item.price * item.quantity);
	}, 0);
};

// Функція для формування списку замовлених товарів у текстовому форматі
export const generateOrderSummary = (cart) => {
	return cart.map(item => `${item.product_name} - ${item.quantity} шт.`).join('\n');
};
