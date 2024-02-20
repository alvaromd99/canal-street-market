import { Link } from 'wouter'
import './eventCard.css'

interface EventCardProps {
	imgSrc: string
	title: string
}

export default function EventCard({ imgSrc, title }: EventCardProps) {
	return (
		<Link to=''>
			<div className='event-card'>
				<div className='img-wrapper'>
					<img src={imgSrc} alt='Event card' />
				</div>
				<p>{title}</p>
			</div>
		</Link>
	)
}
