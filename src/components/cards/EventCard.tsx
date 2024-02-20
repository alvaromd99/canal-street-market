import { Link } from 'wouter'
import './eventCard.css'

interface EventCardProps {
	imgSrc: string
	title: string
	location: string
}

export default function EventCard({ imgSrc, title, location }: EventCardProps) {
	return (
		<Link to={`/community/event/${location}`}>
			<div className='event-card'>
				<div className='img-wrapper'>
					<img src={imgSrc} alt='Event card' />
				</div>
				<p>{title}</p>
			</div>
		</Link>
	)
}
