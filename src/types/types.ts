export interface EventInformation {
	date: string
	info: string
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
	principalPhoto: string
	date: string
	time?: string
	title: string
	description: string
	secondaryPhotos: string[]
}
