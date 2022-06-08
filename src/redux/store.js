import { configureStore } from "@reduxjs/toolkit"
import headSelect from "./slices/headSelectSlice"
import loading from "./slices/loadingSlice"
import currentProduct from "./slices/currentProductSlice"
import favourites from "./slices/favouritesSlice"
import cart from "./slices/cartSlice"
import products from "./slices/productsSlice"
import currentCategory from "./slices/currentCategory"
import headBurger from "./slices/headBurgerSlice"

export const store = configureStore({
	reducer: {
		headSelect,
		loading,
		currentProduct,
		favourites,
		cart,
		products,
		currentCategory,
		headBurger,
	},
})
