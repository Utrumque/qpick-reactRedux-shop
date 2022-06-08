import React from "react"
import ContentLoader from "react-content-loader"

export default function Skeleton() {
	return (
		<div className='skeletons'>
			<ContentLoader
				speed={2}
				width={350}
				height={408}
				viewBox='0 0 350 408'
				backgroundColor='#d9d9d9'
				foregroundColor='#ededed'
			>
				<rect x='125' y='35' rx='0' ry='0' width='5' height='1' />
				<rect x='0' y='0' rx='30' ry='30' width='350' height='408' />
			</ContentLoader>
		</div>
	)
}
