import './foodCard.css'

interface FoodCardProps {
	type: string
	name: string
	imgSrc: string
}

export default function FoodCard({ type, name, imgSrc }: FoodCardProps) {
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
