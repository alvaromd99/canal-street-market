import { Link } from 'wouter'
import './marketEvent.css'

interface MarketEventProps {
	eventDate: string
	eventInfo: string
	link: string
	type: 'internal' | 'external'
}

export default function MarketEvent({
	eventDate,
	eventInfo,
	link,
	type,
}: MarketEventProps) {
	return type === 'internal' ? (
		<Link to={link}>
			<div className='event'>
				<p>{eventDate}</p>
				<p>{eventInfo}</p>
			</div>
		</Link>
	) : (
		<a href={link} target='_blank'>
			<div className='event'>
				<p>{eventDate}</p>
				<p>{eventInfo}</p>
			</div>
		</a>
	)
}
