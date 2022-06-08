import React from "react"

import TermOfService from "../../components/TermOfService"
import terms from "../../assets/dataBase/termsOfService.json"

import "./TermsPage.scss"

export default function TermsPage() {
	return (
		<div className='terms'>
			{terms.map((item, id) => (
				<TermOfService {...item} key={id} />
			))}
		</div>
	)
}
