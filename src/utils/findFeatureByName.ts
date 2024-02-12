import { CommunityFeaturesInformation } from '../types/types'

export function findFeaturesByName(
	productsArray: CommunityFeaturesInformation[],
	name: string
) {
	for (let i = 0; i < productsArray.length; i++) {
		if (
			productsArray[i]?.location?.toLocaleLowerCase().replace(/ /g, '-') ===
			name
		) {
			return productsArray[i]
		}
	}

	return undefined
}
