import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import DropItem from "./DropItem"
import { toggleSelect } from "../../redux/slices/headSelectSlice"

import arrowPopup from "./img/arrow-popup.svg"

export default function HeadSelect({ brand, models }) {
	const [brandList, setBrandList] = useState(false)
	const visability = useSelector((state) => state.headSelect.visability)
	const dispatch = useDispatch()
	const headSelectRef = useRef()

	useEffect(() => {
		const closeHeadModalOnClickOutside = (e) => {
			if (!e.path.includes(headSelectRef.current)) {
				dispatch(toggleSelect(false))
			}
		}

		document.body.addEventListener("click", closeHeadModalOnClickOutside)
		return () => document.body.removeEventListener("click", closeHeadModalOnClickOutside)
	}, [])

	return visability ? (
		<div className='header__popup-item' ref={headSelectRef}>
			<div className='header__popup-brand'>
				<p onClick={() => setBrandList(!brandList)}>{brand}</p>
				<img
					className={brandList ? "header__popup-arrow--active" : "header__popup-arrow"}
					src={arrowPopup}
					alt='selectIco'
				/>
			</div>
			<Link to='/product'>
				<div className={brandList ? "header__popup-droplist--active" : "header__popup-droplist"}>
					{brandList ? models.map((dropItem, id) => <DropItem key={id} {...dropItem} />) : ""}
				</div>
			</Link>
		</div>
	) : (
		""
	)
}
