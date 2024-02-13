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
				<p className='header-letter'>零售</p>
			</section>

			<section className='title-section'>
				<h1>
					<span>{feature?.name}</span>
				</h1>
				<img src={feature?.principalPhoto} alt='Photo' />
			</section>

			<section className='information-section'></section>
		</div>
	)
}
