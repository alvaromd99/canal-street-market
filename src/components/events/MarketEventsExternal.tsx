import { EventInformation } from '../../types/types'
import MarketExternalEvent from '../market/MarketExternalEvent'
import './marketEventsPanel.css'

export interface MarketEventsPanelProps {
	eventsInfo: EventInformation[]
}

export default function MarketEventsExternal({
	eventsInfo,
}: MarketEventsPanelProps) {
	return (
		<div className='bg-animation-wrapper'>
			<div className='events-wrapper'>
				{eventsInfo.map((e, index) => (
					<MarketExternalEvent
						key={index}
						eventDate={e.date}
						eventInfo={e.info}
						link={e.link}
					/>
				))}
			</div>
		</div>
	)
}
