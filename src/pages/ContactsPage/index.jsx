import React from "react"
import { YMaps, Map } from "react-yandex-maps"

import "./contactsPage.scss"

import wApp from "./img/wApp.png"
import vk from "./img/vk.svg"
import tg from "./img/tg.svg"
import inst from "./img/inst.png"
import marker from "./img/marker.svg"
import tel from "./img/tel.svg"

export default function ContactsPage() {
	return (
		<div className='contacts'>
			<div className='contacts__main'>
				<div className='contacts__map-block'>
					<div className='contacts__title'>Наш офис</div>
					<div className='contacts__map'>
						<YMaps>
							<Map
								className='map'
								style={{ height: "424px", width: "100%" }}
								defaultState={{ center: [43.23558, 76.826555], zoom: 16 }}
							/>
						</YMaps>
					</div>
					<div className='contacts__adress'>
						<div className='contacts__adress-marker'>
							<img src={marker} alt='marker' />
						</div>
						<div className='contacts__adress-inner'>
							<div className='contacts__adress-city'>Аксай-3а, 62ф, Алматы, Казахстан</div>
							<div className='contacts__adress-building'>3 этаж 35 кабинет</div>
						</div>
					</div>
				</div>
				<div className='contacts__main-tel'>
					<div className='contacts__tel-marker'>
						<img src={tel} alt='tel' />
					</div>
					<a className='contacts__tel-number' href='tel:+77777777777'>
						+7 777 777 77 77
					</a>
				</div>
			</div>
			<div className='contacts__socials'>
				<a
					className='contacts__social'
					href='https://web.whatsapp.com'
					target='_blank'
					rel='noreferrer'
				>
					<img src={wApp} alt='whatsApp' />
				</a>
				<a className='contacts__social' href='https://vk.com' target='_blank' rel='noreferrer'>
					<img src={vk} alt='vk' />
				</a>
				<a
					className='contacts__social'
					href='https://www.instagram.com'
					target='_blank'
					rel='noreferrer'
				>
					<img src={inst} alt='inst' />
				</a>
				<a
					className='contacts__social'
					href='https://web.telegram.org/z/'
					target='_blank'
					rel='noreferrer'
				>
					<img src={tg} alt='tg' />
				</a>
			</div>
		</div>
	)
}
