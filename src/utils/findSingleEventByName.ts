import { EventsPageInformation } from '../types/types'

export function findSingleEventByName(
	eventsArray: EventsPageInformation[],
	name: string
) {
	for (let i = 0; i < eventsArray.length; i++) {
		if (eventsArray[i]?.location === name) {
			return eventsArray[i]
		}
	}

	return undefined
}
