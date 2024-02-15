import { useLocation } from 'wouter'
import './featuredCard.css'

interface FeaturedCardProps {
	imgSrc: string
	title: string
	location: string
}

export default function FeaturedCard({
	imgSrc,
	title,
	location,
}: FeaturedCardProps) {
	const [, setLocation] = useLocation()

	const handleClick = () => {
		setLocation(location)
	}
	return (
		<div className='feature-card' onClick={handleClick}>
			<img src={imgSrc} alt={`${title} img`} loading='lazy' />
			<div className='feature-text'>
				<h4>
					<span>{title}</span>
				</h4>
			</div>
		</div>
	)
}
