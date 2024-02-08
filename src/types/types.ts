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
