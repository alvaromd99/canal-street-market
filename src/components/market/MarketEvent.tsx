import { Link } from 'wouter'
import './marketEvent.css'

interface MarketEventProps {
	eventDate: string
	eventInfo: string
	link: string
}

export default function MarketEvent({
	eventDate,
	eventInfo,
	link,
}: MarketEventProps) {
	return (
		<Link to={link}>
			<div className='event'>
				<p>{eventDate}</p>
				<p>{eventInfo}</p>
			</div>
		</Link>
	)
}
