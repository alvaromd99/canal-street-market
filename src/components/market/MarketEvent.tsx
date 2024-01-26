import './marketEvent.css'

interface MarketEventProps {
	eventDate: string
	eventInfo: string
}

export default function MarketEvent({
	eventDate,
	eventInfo,
}: MarketEventProps) {
	return (
		<div className='event'>
			<p>{eventDate}</p>
			<p>{eventInfo}</p>
		</div>
	)
}
