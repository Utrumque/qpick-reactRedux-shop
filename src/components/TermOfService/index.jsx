import React from "react"

import "./TermOfService.scss"

export default function TermOfService({ title, text }) {
	return (
		<div className='terms__item'>
			<div className='terms__item-title'>{title}</div>
			<div className='terms__item-text'>{text}</div>
		</div>
	)
}
