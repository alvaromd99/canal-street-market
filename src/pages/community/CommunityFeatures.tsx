import { useEffect, useRef } from 'react'
import FeaturedCard from '../../components/cards/FeaturedCard'
import Footer from '../../components/footer/Footer'
import CommunityPagesTitle from '../../components/pageTitle/CommunityPagesTitle'
import { CommunityFeaturesInfo } from '../../constants/constants'
import './communityFeatures.css'

export default function CommunityFeatures() {
	const topRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		topRef.current?.scrollIntoView()
	}, [])

	return (
		<div className='community-features-page page' ref={topRef}>
			<section className='header-section'>
				<CommunityPagesTitle
					title={'Features'}
					text={
						'Our mixed-use space hosts ongoing events, podcasts & artists in residence'
					}
					letter={'文化'}
				/>
			</section>

			<section className='features-section'>
				{CommunityFeaturesInfo.map((feature, index) => (
					<FeaturedCard
						key={index}
						imgSrc={feature.principalPhoto}
						title={feature.communityName}
						location={`/community/feature/${feature.location}`}
					/>
				))}
			</section>

			<section className='footer-section'>
				<Footer />
			</section>
		</div>
	)
}
