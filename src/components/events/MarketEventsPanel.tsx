import { EventInformation } from '../../types/types'
import MarketEvent from '../market/MarketEvent'
import './marketEventsPanel.css'

export interface MarketEventsPanelProps {
	eventsInfo: EventInformation[]
	type: 'internal' | 'external'
}

export default function MarketEventsPanel({
	eventsInfo,
	type,
}: MarketEventsPanelProps) {
	return type === 'internal' ? (
		<div className='bg-animation-wrapper'>
			<div className='events-wrapper'>
				{eventsInfo.map((e, index) => (
					<MarketEvent
						key={index}
						eventDate={e.date}
						eventInfo={e.info}
						link={e.link}
						type={'internal'}
					/>
				))}
			</div>
		</div>
	) : (
		<div className='bg-animation-wrapper'>
			<div className='events-wrapper'>
				{eventsInfo.map((e, index) => (
					<MarketEvent
						key={index}
						eventDate={e.date}
						eventInfo={e.info}
						link={e.link}
						type={'external'}
					/>
				))}
			</div>
		</div>
	)
}
