import React from "react"
import { useSelector } from "react-redux"

import Bannner from "../../components/Banner"
import Categories from "../../components/Categories"
import ProdsBlock from "../../components/ProdsBlock"

import categoriesData from "../../assets/dataBase/cases.json"

import "./MainPage.scss"

function Main() {
	const products = useSelector((state) => state.products.values)

	return (
		<>
			<Bannner />
			<div className='main'>
				{categoriesData.map((obj, id) => (
					<Categories key={id} {...obj} />
				))}
				{products.map((product, id) => (
					<ProdsBlock key={id} {...product} />
				))}
			</div>
		</>
	)
}

export default Main
