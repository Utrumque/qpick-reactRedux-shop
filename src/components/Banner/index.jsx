import React from "react"

import "./banner.scss"

import bannerImg from "./img/bannerImg.png"

export default function Bannner() {
	return (
		<div className='banner'>
			<div className='banner__text'>
				Аксессуары для <br /> Iphone 13 Pro Max
			</div>
			<img className='banner__img' src={bannerImg} alt='bannerImg' />
		</div>
	)
}
