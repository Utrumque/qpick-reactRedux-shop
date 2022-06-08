import React from "react"
import { useDispatch } from "react-redux"
import { onDeleteFromCart, incrementCount, decrementCount } from "../../redux/slices/cartSlice"

import deleteImg from "../../components/CartProd/img/delete.svg"
import minusImg from "../../components/CartProd/img/minus.png"
import plusImg from "../../components/CartProd/img/plus.png"

import "./cartProd.scss"

export default function CartProd({ name, price, img, id, count, totalPrice }) {
	const obj = { id, name, img, price, count, totalPrice }

	const dispatch = useDispatch()

	return (
		<div className='prod'>
			<div className='prod__top'>
				<div className='prod__img'>
					<img src={img} alt='prod' />
				</div>
				<div className='prod__info'>
					<div className='prod__name'>{name}</div>
					<div className='prod__price'>{price} ₸</div>
				</div>
				<button className='prod__delete' onClick={() => dispatch(onDeleteFromCart(obj))}>
					<img src={deleteImg} alt='delete' />
				</button>
			</div>
			<div className='prod__bottom'>
				<button
					className='prod__minus'
					onClick={() => dispatch(decrementCount(obj))}
					disabled={count === 1}
				>
					<img src={minusImg} alt='' />
				</button>
				<div className='prod__count'>{count}</div>
				<button className='prod__plus' onClick={() => dispatch(incrementCount(obj))}>
					<img src={plusImg} alt='' />
				</button>
				{totalPrice > 0 && <div className='prod__sum'>{totalPrice} ₸</div>}
			</div>
		</div>
	)
}
