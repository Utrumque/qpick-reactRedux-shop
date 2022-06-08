import React from "react"
import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import MainPage from "./pages/MainPage"
import ProdPage from "./pages/ProdPage"
import TermsPage from "./pages/TermsPage"
import ContactsPage from "./pages/ContactsPage"
import FavouritePage from "./pages/FavouritePage"
import CategoryInnerPage from "./pages/CategoryInnerPage"
import CartChoisePage from "./pages/CartChoisePage"
import CheckoutPage from "./pages/CheckoutPage"

import { useSelector, useDispatch } from "react-redux"
import { toggleLoading } from "./redux/slices/loadingSlice"
import { fetchFavourites } from "./redux/slices/favouritesSlice"
import { fetchProducts } from "./redux/slices/productsSlice"

function App() {
	const { error } = useSelector((state) => state.favourites)
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(fetchProducts())
		dispatch(fetchFavourites())
		dispatch(toggleLoading(false))
	}, [dispatch])

	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<div className='wrapper'>
					{error && <h2>An error occured: {error}</h2>}
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/product' element={<ProdPage />} />
						<Route path='/terms' element={<TermsPage />} />
						<Route path='/categoryInner' element={<CategoryInnerPage />} />
						<Route path='/contacts' element={<ContactsPage />} />
						<Route path='/favourite' element={<FavouritePage />} />
						<Route path='/cart' element={<CartChoisePage />} />
						<Route path='/checkout' element={<CheckoutPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default App
