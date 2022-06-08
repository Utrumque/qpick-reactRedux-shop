import React from "react"
import { Link } from "react-router-dom"

import cartEmpty from "./img/cartEmpty.svg"

import "./cartEmpty.scss"

export default function CartEmpty() {
	return (
		<div className='cart-empty'>
			<div className='cart-empty__img'>
				<img src={cartEmpty} alt='cartEmpty' />
			</div>
			<div className='cart-empty__title'>Корзина пуста</div>
			<p className='cart-empty__subtitle'>Но это никогда не поздно исправить :)</p>
			<Link to='/'>
				<div className='cart-empty__btn'>
					<span>В каталог товаров</span>
				</div>
			</Link>
		</div>
	)
}
