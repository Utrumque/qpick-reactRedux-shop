import React from "react"
import Slider from "react-slick"

import Category from "../Category"

import "./categories.scss"

export default function Categories({ categories, name }) {
	const settingsSlick = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<div className='categories'>
			<div className='categories__name'>{name}</div>
			<div className='categories__inner'>
				{categories.map((obj, id) => (
					<Category key={id} {...obj} />
				))}
			</div>
			<Slider className='categories__slick' {...settingsSlick}>
				{categories.map((obj, id) => (
					<Category key={id} {...obj} />
				))}
			</Slider>
		</div>
	)
}
