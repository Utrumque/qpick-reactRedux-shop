import React from "react"
import { useSelector } from "react-redux"

import Product from "../../components/Product"

import "./favouritePage.scss"

export default function FavouritePage() {
	const data = useSelector((state) => state.favourites.values)

	return (
		<div className='favourite'>
			{data.map((item, id) => (
				<Product key={id} {...item} />
			))}
		</div>
	)
}
