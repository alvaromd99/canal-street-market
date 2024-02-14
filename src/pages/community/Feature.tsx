import { useEffect, useRef } from 'react'
import BackBtn from '../../components/btn/BackBtn'
import { communityFeatures } from '../../constants/constants'
import { findFeaturesByName } from '../../utils/findFeatureByName'
import './feature.css'

export default function Feature({ name }: { name: string }) {
	const feature = findFeaturesByName(communityFeatures, name)

	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const topRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		wrapperRef.current?.classList.remove('fading-in')
		topRef.current?.scrollIntoView()
		wrapperRef.current?.classList.add('fading-in')
	}, [])

	return (
		<div className='feature-page' ref={topRef}>
			{feature && (
				<div className='animation-wrapper' ref={wrapperRef}>
					<section className='feature-header'>
						<div className='header-btn-wrapper'>
							<BackBtn text={'Community'} location={'/community'} />
							<BackBtn text={'Features'} location={'/community/feature'} />
						</div>
						<p className='header-letter'>零售</p>
					</section>

					<section className='title-section'>
						<h1>
							<span>{feature.name}</span>
						</h1>
						<img src={feature.principalPhoto} alt='Photo' />
					</section>

					<section className='information-section'>
						<div className='information-text'>
							<p>{feature.ownerName}</p>
							<p>{feature.ownerDescription}</p>
							{feature.secondaryPhoto && (
								<img
									src={feature.secondaryPhoto}
									alt={`${feature.ownerName} secondary photo`}
								/>
							)}
						</div>
						<div className='aside-link'></div>
					</section>
				</div>
			)}
		</div>
	)
}
