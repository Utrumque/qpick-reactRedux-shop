import React from "react"
import { useSelector } from "react-redux"
import Slider from "react-slick"

import Skeleton from "../Skeleton"
import Product from "../Product"

import "./prodsBlock.scss"

export default function ProdsBlock({ category, prods }) {
	const loading = useSelector((state) => state.loading.loading)
	const settingsSlick = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	}

	return (
		<>
			{loading ? (
				<>
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</>
			) : (
				<div className='products'>
					<div className='products__category'>{category}</div>
					<div className='products__inner'>
						{prods.map((prod, id) => (
							<Product key={id} category={category} {...prod} />
						))}
					</div>
					<Slider className='products__slick' {...settingsSlick}>
						{prods.map((prod, id) => (
							<Product key={id} category={category} {...prod} />
						))}
					</Slider>
				</div>
			)}
		</>
	)
}
