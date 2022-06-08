import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getCurrentCategory } from "../../redux/slices/currentCategory"
import Skeleton from "../../components/Skeleton"

import "./category.scss"

export default function Category({ img, category, prods }) {
	const dispatch = useDispatch()
	const loading = useSelector((state) => state.loading.loading)

	return (
		<>
			{loading ? (
				<>
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</>
			) : (
				<Link to={"/categoryInner"}>
					<div className='category' onClick={() => dispatch(getCurrentCategory(prods))}>
						<div className='category__img'>
							<img src={img} alt='category' />
						</div>
						<div className='category__name'>{category}</div>
					</div>
				</Link>
			)}
		</>
	)
}
