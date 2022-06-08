import React from "react"
import { YMaps, Map } from "react-yandex-maps"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import CartProd from "../../components/CartProd"
import CartEmpty from "../../components/CartEmpty"

import carImg from "./img/car.svg"
import "./cartChoisePage.scss"

export default function CartChoisePage() {
	const prods = useSelector((state) => state.cart.prods)
	const totalCartPrice = useSelector((state) => state.cart.totalCartPrice)

	return (
		<>
			{prods.length < 1 ? (
				<CartEmpty />
			) : (
				<div className='summary'>
					<div className='info'>
						<div className='title'>Корзина</div>
						<div className='prods'>
							{prods.map((product, id) => (
								<CartProd key={id} {...product} />
							))}
						</div>
						<div className='delivery'>
							<div className='delivery__inner'>
								<div className='delivery__title'>Доставка</div>
								<div className='delivery__map'>
									<YMaps>
										<Map
											className='map'
											style={{ height: "173px", width: "100%" }}
											defaultState={{ center: [43.23558, 76.826555], zoom: 16 }}
										/>
									</YMaps>
								</div>
								<div className='delivery__bottom'>
									<div className='delivery__choise'>
										<img className='delivery__choise-img' src={carImg} alt='carImg' />
										<div className='delivery__choise-text'>Доставка курьером</div>
									</div>
									<div className='delivery__price'>499 ₸</div>
								</div>
							</div>
						</div>
					</div>
					<div className='price'>
						<div className='price__info'>
							<div className='price__info-text'>ИТОГО</div>
							<div className='price__info-sum'>₸ {totalCartPrice}</div>
						</div>
						<Link to='/checkout'>
							<button className='price__btn'>Перейти к оформлению</button>
						</Link>
					</div>
				</div>
			)}
		</>
	)
}
