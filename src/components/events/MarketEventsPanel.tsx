import './marketEventsPanel.css'
import MarketEvent from '../market/MarketEvent'
import { EventInformation } from '../types/types'

export interface MarketEventsPanelProps {
	eventsInfo: EventInformation[]
}

export default function MarketEventsPanel({
	eventsInfo,
}: MarketEventsPanelProps) {
	return (
		<div className='bg-animation-wrapper'>
			<div className='events-wrapper'>
				{eventsInfo.map((e, index) => (
					<MarketEvent key={index} eventDate={e.date} eventInfo={e.info} />
				))}
			</div>
		</div>
	)
}
