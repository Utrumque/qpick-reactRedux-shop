import React from "react"

export default function CheckoutProd({ count, name, totalPrice, price }) {
	return (
		<div className='prods__item'>
			<div className='prods__count'>{count < 1 ? 0 : count}х</div>
			<div className='prods__name'>{name}</div>
			<div className='prods__price'>₸ {totalPrice === 0 ? price : totalPrice}</div>
		</div>
	)
}
