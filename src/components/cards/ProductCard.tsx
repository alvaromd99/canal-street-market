import './productCard.css'

interface FoodCardProps {
	type: string
	name: string
	imgSrc: string
}

export default function ProductCard({ type, name, imgSrc }: FoodCardProps) {
	return (
		<div className='food-plate'>
			<div className='plate-info'>
				<p>{type}</p>
				<p>{name}</p>
			</div>
			{imgSrc !== '' && <img src={imgSrc} alt={`${name} photo`} />}
		</div>
	)
}
