import React from "react"
import { useSelector } from "react-redux"

import Product from "../../components/Product"

import "./categoryInner.scss"

export default function CategoryInner() {
	const currentCategory = useSelector((state) => state.currentCategory.value)

	return (
		<div className='categoryInner'>
			{currentCategory.map((obj, id) => (
				<Product key={id} {...obj} />
			))}
		</div>
	)
}
