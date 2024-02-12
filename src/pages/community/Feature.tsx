import BackBtn from '../../components/btn/BackBtn'
import { communityFeatures } from '../../constants/constants'
import { findFeaturesByName } from '../../utils/findFeatureByName'
import './feature.css'

export default function Feature({ name }: { name: string }) {
	const feature = findFeaturesByName(communityFeatures, name)
	console.log(feature?.name)

	return (
		<div className='feature-page'>
			<section className='feature-header'>
				<div className='header-btn-wrapper'>
					<BackBtn text={'Community'} location={'/community'} />
					<BackBtn text={'Features'} location={'/community/feature'} />
				</div>
				<p className='header-letter'>{feature?.letter}</p>
			</section>
		</div>
	)
}
