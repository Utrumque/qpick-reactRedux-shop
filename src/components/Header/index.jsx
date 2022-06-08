import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleSelect } from "../../redux/slices/headSelectSlice"
import { fetchFavourites } from "../../redux/slices/favouritesSlice"
import { toggleBurger } from "../../redux/slices/headBurgerSlice"

import HeadSelect from "../HeadSelect"
import headSelectData from "../../assets/dataBase/headerAccordeon"

import landImg from "../Footer/img/lang.svg"
import favoImg from "./img/favo.svg"
import contactsImg from "./img/contacts.svg"
import termsImg from "./img/terms.svg"
import "./header.scss"

import selectIco from "./img/selectIco.svg"
import arrowDown from "./img/arrow-down.svg"
import fav from "./img/fav.svg"
import cart from "./img/cart.svg"

export default function Header() {
	const visability = useSelector((state) => state.headSelect.visability)
	const values = useSelector((state) => state.favourites.values)
	const prods = useSelector((state) => state.cart.prods)
	const burger = useSelector((state) => state.headBurger.value)
	const dispatch = useDispatch()
	const burgerBtn = useRef()

	useEffect(() => {
		const closeBUrgerOnClickOutside = (e) => {
			if (!e.path.includes(burgerBtn.current)) {
				dispatch(toggleBurger(false))
			}
		}

		document.body.addEventListener("click", closeBUrgerOnClickOutside)
		return () => document.body.removeEventListener("click", closeBUrgerOnClickOutside)
	}, [])

	return (
		<div className='header'>
			<Link to='/'>
				<div className='header__logo'>QPICK</div>
			</Link>
			<div className='select'>
				<div className='header__select'>
					<img className='header__select-img' src={selectIco} alt='selectIco' />
					<div className='header__select-text' onClick={() => dispatch(toggleSelect(!visability))}>
						Выбрать модель телефона
					</div>
					<img
						className={visability ? "header__select-arrow--active" : "header__select-arrow"}
						src={arrowDown}
						alt='arrowDown'
					/>
					<div
						className={visability ? "header__popup header__popup--active" : "header__popup"}
						onClick={(e) => e.stopPropagation()}
					>
						{visability &&
							headSelectData.map((selectItem, id) => <HeadSelect {...selectItem} key={id} />)}
					</div>
				</div>
			</div>
			<Link to='/favourite'>
				<div className='header__favourite' onClick={() => dispatch(fetchFavourites())}>
					<img className='header__favourite-img' src={fav} alt='fav' />
					{values.length > 0 && (
						<div className='header__favourite-count header__count'>{values.length}</div>
					)}
				</div>
			</Link>
			<nav className='burger' onClick={() => dispatch(toggleBurger(!burger))} ref={burgerBtn}>
				<div className='burger__btn'></div>
				<div className='burger__btn'></div>
				<div className='burger__btn'></div>
			</nav>
			{burger && (
				<div className='menu'>
					<div className='blur'></div>
					<div className='header__select' onClick={(e) => e.stopPropagation()}>
						<img className='header__select-img' src={selectIco} alt='selectIco' />
						<div
							className='header__select-text'
							onClick={() => dispatch(toggleSelect(!visability))}
						>
							Выбрать модель телефона
						</div>
						<img
							className={visability ? "header__select-arrow--active" : "header__select-arrow"}
							src={arrowDown}
							alt='arrowDown'
						/>
					</div>
					<div
						className={visability ? "header__popup header__popup--active" : "header__popup"}
						onClick={(e) => e.stopPropagation()}
					>
						{visability &&
							headSelectData.map((selectItem, id) => <HeadSelect {...selectItem} key={id} />)}
					</div>
					<div
						className='bottom'
						onClick={(e) => {
							dispatch(toggleBurger(!burger))
							e.stopPropagation()
						}}
					>
						<div className='bottom__favourite item'>
							<Link to='/favourite'>
								<img src={favoImg} alt='favoImg' />
								<span>Избранное</span>
							</Link>
						</div>
						<div className='bottom__terms item'>
							<Link to='/terms'>
								<img src={termsImg} alt='termsImg' />
								<span>Условия сервиса</span>
							</Link>
						</div>
						<div className='bottom__contacts item'>
							<Link to='/contacts'>
								<img src={contactsImg} alt='contactsImg' />
								<span>Контакты</span>
							</Link>
						</div>
						<div className='bottom__langs item'>
							<img src={landImg} alt='landImg' />
							<div className='bottom__lang'>Каз</div>
							<div className='bottom__lang lang--active'>Рус</div>
							<div className='bottom__lang'>Eng</div>
						</div>
					</div>
				</div>
			)}
			<Link to='/cart'>
				<div className='header__cart'>
					<img className='header__cart-img' src={cart} alt='cart' />
					{prods.length > 0 && (
						<div className='header__cart-count header__count'>{prods.length}</div>
					)}
				</div>
			</Link>
		</div>
	)
}
