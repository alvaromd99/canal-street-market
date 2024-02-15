import { useEffect, useRef } from 'react'
import BackBtn from '../../components/btn/BackBtn'
import FeaturedCard from '../../components/cards/FeaturedCard'
import Footer from '../../components/footer/Footer'
import { communityFeatures } from '../../constants/constants'
import './communityFeatures.css'

export default function CommunityFeatures() {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const topRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		wrapperRef.current?.classList.remove('fading-in')
		topRef.current?.scrollIntoView()
		wrapperRef.current?.classList.add('fading-in')
	}, [])

	return (
		<div className='community-features-page' ref={topRef}>
			<div className='animation-wrapper' ref={wrapperRef}>
				<section className='header-section'>
					<div className='header-left'>
						<BackBtn text={'community'} location={'/community'} />
						<h1>Features</h1>
					</div>
					<div className='header-right'>
						<p>
							Our mixed-use space hosts ongoing events, podcasts & artists in
							residence
						</p>
						<p>文化</p>
					</div>
				</section>

				<section className='features-section'>
					{communityFeatures.map((feature, index) => (
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
		</div>
	)
}
