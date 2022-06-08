import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleSelect } from "../../../redux/slices/headSelectSlice"
import { toggleBurger } from "../../../redux/slices/headBurgerSlice"

export default function DropItem({ model }) {
	const value = useSelector((state) => state.headSelect.visability)
	const burger = useSelector((state) => state.headBurger.value)
	const dispatch = useDispatch()

	return (
		<div
			className='header__popup-model'
			onClick={() => {
				dispatch(toggleBurger(false))
				dispatch(toggleSelect(!value))
			}}
		>
			{model}
		</div>
	)
}
