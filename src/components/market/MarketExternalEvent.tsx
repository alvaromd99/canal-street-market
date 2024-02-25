import './marketEvent.css'

interface MarketEventProps {
	eventDate: string
	eventInfo: string
	link: string
}

export default function MarketExternalEvent({
	eventDate,
	eventInfo,
	link,
}: MarketEventProps) {
	return (
		<a href={link} target='_blank'>
			<div className='event'>
				<p>{eventDate}</p>
				<p>{eventInfo}</p>
			</div>
		</a>
	)
}
