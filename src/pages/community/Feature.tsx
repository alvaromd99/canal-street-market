import { communityFeatures } from '../../constants/constants'
import { findFeaturesByName } from '../../utils/findFeatureByName'
import './feature.css'

export default function Feature({ name }: { name: string }) {
	const feature = findFeaturesByName(communityFeatures, name)
	console.log(feature?.name)

	return <div>{name}</div>
}
