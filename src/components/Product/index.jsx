import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Skeleton from "../Skeleton"
import { getCurrProdData } from "../../redux/slices/currentProductSlice"
import { deleteFavourite } from "../../redux/slices/favouritesSlice"
import { addFavourite } from "../../redux/slices/favouritesSlice"

import "./product.scss"

export default function Product({
	img,
	name,
	price,
	oldPrice,
	star,
	id,
	rating,
	category,
	modelCategory,
	count,
	totalPrice,
}) {
	const dispatch = useDispatch()
	const loading = useSelector((state) => state.loading.loading)
	const favourites = useSelector((state) => state.favourites.values)
	const [isFavorite, setIsFavorite] = React.useState(false)
	const obj = {
		id,
		name,
		img,
		price,
		oldPrice,
		star,
		rating,
		category,
		modelCategory,
		count,
		totalPrice,
	}

	const onClickFavorite = (obj) => {
		if (favourites.find((item) => item.name === obj.name)) {
			dispatch(deleteFavourite(id))
			setIsFavorite(false)
		} else {
			setIsFavorite(true)
			dispatch(addFavourite(obj))
		}
	}

	return (
		<>
			{loading ? (
				<div
					className='skeletons'
					style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginTop: "30px" }}
				>
					<Skeleton />
				</div>
			) : (
				<div className='product' onClick={() => dispatch(getCurrProdData(obj))}>
					<div
						className={isFavorite ? "product__fav product__fav--active" : "product__fav"}
						onClick={() => onClickFavorite(obj)}
					>
						<svg
							width='20'
							height='19'
							viewBox='0 0 20 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								id='fav'
								d='M9.66726 1.90129L10.0013 2.2007L10.335 1.90103C12.4877 -0.0316791 15.8153 0.0328348 17.889 2.11006C19.96 4.18653 20.034 7.49041 18.1151 9.64975L9.99905 17.7773L1.88489 9.64977C-0.0341134 7.4903 0.041325 4.18085 2.11048 2.11061C4.18669 0.0353202 7.50789 -0.0344437 9.66726 1.90129Z'
								fill='#1c1c27'
								stroke='#1c1c27'
							/>
						</svg>
					</div>
					<Link to='/product'>
						<div className='product__img'>
							<img src={img} alt='product' />
						</div>
					</Link>
					<div className='product__info'>
						<Link to='/product'>
							<div className='product__name'>{name}</div>
						</Link>
						<div className='product__price'>
							{price && <div className='product__price-current'>{price} ₸</div>}
							{oldPrice && <div className='product__price-old'>{oldPrice} ₸</div>}
						</div>
					</div>
					<div className='product__rating'>
						{star && <img className='product__rating-ico' src={star} alt='rating' />}
						{rating && <div className='product__rating-text'>{rating}</div>}
					</div>
				</div>
			)}
		</>
	)
}
