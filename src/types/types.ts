export interface EventInformation {
	date: string
	info: string
	link: string
}

export interface FoodPlateInformation {
	id: number
	type: string
	name: string
	principalPhoto: string
	secondaryPhotos: string[]
	description: string
}

export interface RetailObjectsInformation {
	id: number
	type: string
	name: string
	principalPhoto: string
	secondaryPhotos: string[]
	description: string
	openHours: string[]
	links: string[]
}

export interface CommunityFeaturesInformation {
	location: string
	name: string
	type: string
	ownerName: string
	ownerDescription: string
	communityName: string
	principalPhoto: string
	secondaryPhoto?: string
	asidePhoto: string
	link: string
	questions: Question[]
}

export interface Question {
	question: string
	response: string
}

export interface EventsPageInformation {
	location: string
	principalPhoto: string
	date: string
	time?: string
	title: string
	description: string
	secondaryPhotos: string[]
}

export interface ModalListInformation {
	title: string
	listItems: ModalList[]
}

export interface ModalList {
	markerSrc: string
	text: string
}
