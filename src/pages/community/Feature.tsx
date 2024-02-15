import { useEffect, useRef } from 'react'
import BackBtn from '../../components/btn/BackBtn'
import FeaturedCard from '../../components/cards/FeaturedCard'
import Footer from '../../components/footer/Footer'
import Question from '../../components/questions/Question'
import { communityFeatures } from '../../constants/constants'
import { findFeaturesByName } from '../../utils/findFeatureByName'
import './feature.css'

export default function Feature({ name }: { name: string }) {
	const selectedFeature = findFeaturesByName(communityFeatures, name)

	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const topRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		wrapperRef.current?.classList.remove('fading-in')
		topRef.current?.scrollIntoView()
		wrapperRef.current?.classList.add('fading-in')
	}, [])

	return (
		<div className='feature-page' ref={topRef}>
			{selectedFeature && (
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
							<span>{selectedFeature.name}</span>
						</h1>
						<img src={selectedFeature.principalPhoto} alt='Photo' />
					</section>

					<section className='information-section'>
						<div className='information-text'>
							<p>{selectedFeature.ownerName}</p>
							<p>{selectedFeature.ownerDescription}</p>
							{selectedFeature.secondaryPhoto && (
								<img
									src={selectedFeature.secondaryPhoto}
									alt={`${selectedFeature.ownerName} secondary photo`}
								/>
							)}
							{selectedFeature.questions.map(
								({ question, response }, index) => (
									<Question
										question={question}
										response={response}
										key={index}
									/>
								)
							)}
						</div>
						<div className='aside-link'></div>
					</section>

					<section className='more-features-section'>
						<h2>Features</h2>
						<div className='features-grid'>
							{communityFeatures
								.filter((feature) => feature.name !== selectedFeature.name)
								.map((feature, index) => (
									<FeaturedCard
										key={index}
										imgSrc={feature.principalPhoto}
										title={feature.communityName}
										location={`/community/feature/${feature.location}`}
									/>
								))}
						</div>
					</section>

					<section className='footer-section'>
						<Footer />
					</section>
				</div>
			)}
		</div>
	)
}
