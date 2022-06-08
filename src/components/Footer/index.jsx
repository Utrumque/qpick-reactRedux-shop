import React from "react"
import { Link } from "react-router-dom"

import "./footer.scss"

import langImg from "./img/lang.svg"
import vkImg from "./img/vk.svg"
import instImg from "./img/inst.svg"
import tgImg from "./img/tg.svg"
import wAppImg from "./img/wapp.svg"

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer__logo'>QPICK</div>
			<div className='footer__nav'>
				<div className='footer__btns'>
					<Link to='/favourite'>
						<div className='footer__btn'>Избранное</div>
					</Link>
					<Link to='/cart'>
						<div className='footer__btn'>Корзина</div>
					</Link>
					<Link to='/contacts'>
						<div className='footer__btn'>Контакты</div>
					</Link>
				</div>
				<div className='footer__lang'>
					<Link to='/terms'>
						<div className='footer__btn'>Условия сервиса</div>
					</Link>
					<div className='footer__lang-btns'>
						<img src={langImg} alt='langImg' />
						<div className='footer__lang-btn'>Каз</div>
						<div className='footer__lang-btn footer__lang-btn--active'>Рус</div>
						<div className='footer__lang-btn'>Eng</div>
					</div>
				</div>
			</div>
			<div className='footer__society'>
				<a className='footer__society-btn' href='https://vk.com' target='_blank' rel='noreferrer'>
					<img src={vkImg} alt='vk' />
				</a>
				<a
					className='footer__society-btn'
					href='https://www.instagram.com'
					target='_blank'
					rel='noreferrer'
				>
					<img src={instImg} alt='inst' />
				</a>
				<a
					className='footer__society-btn'
					href='https://web.telegram.org/z/'
					target='_blank'
					rel='noreferrer'
				>
					<img src={tgImg} alt='tg' />
				</a>
				<a
					className='footer__society-btn'
					href='https://web.whatsapp.com'
					target='_blank'
					rel='noreferrer'
				>
					<img src={wAppImg} alt='wApp' />
				</a>
			</div>
		</div>
	)
}
