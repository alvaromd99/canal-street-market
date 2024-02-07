import './productCard.css'

interface ProductCardProps {
	route: 'food' | 'retail'
	type: string
	name: string
	imgSrc: string
}

export default function ProductCard({
	route,
	type,
	name,
	imgSrc,
}: ProductCardProps) {
	console.log(route)

	const handleClick = () => {}

	return (
		<div className='food-plate' onClick={handleClick}>
			<div className='plate-info'>
				<p>{type}</p>
				<p>{name}</p>
			</div>
			{imgSrc !== '' && <img src={imgSrc} alt={`${name} photo`} />}
		</div>
	)
}
