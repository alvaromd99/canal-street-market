import { FoodPlateInformation, RetailObjectsInformation } from '../types/types'

export function findProductsByName(
	productsArray: (FoodPlateInformation | RetailObjectsInformation)[],
	name: string
) {
	for (let i = 0; i < productsArray.length; i++) {
		if (productsArray[i].name.toLocaleLowerCase().replace(/ /g, '-') === name) {
			return productsArray[i]
		}
	}

	return undefined
}
