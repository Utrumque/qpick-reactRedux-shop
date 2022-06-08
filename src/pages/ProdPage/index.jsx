import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { onAddToCart } from "../../redux/slices/cartSlice"
import { Link } from "react-router-dom"
import Slider from "react-slick"

import logo from "./img/logo.png"
import cart from "./img/cart.svg"

import "./prodPage.scss"

export default function ProdPage() {
	const currentProduct = useSelector((state) => state.currentProduct.value)
	const dispatch = useDispatch()

	const settingsSlick = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 490,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true,
					dots: true,
				},
			},
		],
	}

	return (
		<div className='prodpage'>
			<div className='prodpage__category'>Автодержатель</div>
			<div className='prodpage__top'>
				<div className='prodpage__logo'>
					<img src={logo} alt='prodLogo' />
				</div>
				<div className='prodpage__images'>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
				</div>
				<Slider className='prodpage__slick' {...settingsSlick}>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
					<div className='prodpage__image'>
						<img src={currentProduct.img} alt='prodImg' />
					</div>
				</Slider>
				<div className='prodpage__info-top'>
					<div className='prodpage__name'>{currentProduct.name}</div>
					<div className='prodpage__price'>
						<div className='prodpage__price-curr'>{currentProduct.price} ₸</div>
						{currentProduct.oldPrice && (
							<div className='prodpage__price-old'>{currentProduct.oldPrice} ₸</div>
						)}
					</div>
				</div>
			</div>
			<div className='prodpage__bottom'>
				<div className='prodpage__descr'>
					<div className='prodpage__descr-title'>
						<span>Описание и характеристики</span>
					</div>
					<ul className='prodpage__descr-items'>
						<li className='prodpage__descr-item'>Активное шумоподавление: Нет</li>
						<li className='prodpage__descr-item'>Вес: 10 гр</li>
						<li className='prodpage__descr-item'>Влагозащита: Нет</li>
						<li className='prodpage__descr-item'>Длина кабеля: 1.2 м</li>
						<li className='prodpage__descr-item'>Комплектация: Наушники</li>
						<li className='prodpage__descr-item'>Материал корпуса: Пластик, резина</li>
						<li className='prodpage__descr-item'>Микрофон: Да</li>
						<li className='prodpage__descr-item'>Назначение: Проводные наушники</li>
						<li className='prodpage__descr-item'>Ответить/закончить разговор: Да</li>
						<li className='prodpage__descr-item'>Разъем наушников: Lightning</li>
						<li className='prodpage__descr-item'>Регулятор громкости: Да</li>
						<li className='prodpage__descr-item'>Тип крепления: Без крепления</li>
						<li className='prodpage__descr-item'>Тип наушников: Вкладыши ("таблетки")</li>
						<li className='prodpage__descr-item'>Тип подключения: Проводное</li>
						<li className='prodpage__descr-item'>Частотный диапазон: 20 Гц - 20000 Гц</li>
						<li className='prodpage__descr-item'>Чувствительность: 109 дБ</li>
					</ul>
				</div>
				<div className='prodpage__btns'>
					<Link to='/checkout' onClick={() => dispatch(onAddToCart(currentProduct))}>
						<div className='prodpage__btn'>Купить!</div>
					</Link>
					<div className='prodpage__btn' onClick={() => dispatch(onAddToCart(currentProduct))}>
						<img src={cart} alt='cart' />
						<span>Добавить в корзину</span>
					</div>
				</div>
			</div>
		</div>
	)
}
