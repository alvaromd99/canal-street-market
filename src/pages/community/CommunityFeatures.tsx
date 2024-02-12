import { useEffect, useRef } from 'react'
import BackBtn from '../../components/btn/BackBtn'
import FeaturedCard from '../../components/cards/FeaturedCard'
import Footer from '../../components/footer/Footer'
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
					<FeaturedCard
						imgSrc={
							'https://images.prismic.io/canalstreetmarket/ad63bd2481b47c4b95e0ce8eb265658541ace7f4_001-1-1.jpg?auto=compress,format'
						}
						title={'CSM Community - AMDC'}
						location={'/community/feature/AMDC'}
					/>
					<FeaturedCard
						imgSrc={
							'https://images.prismic.io/canalstreetmarket/9c41db6b59d689aeda46a6a6405d8767649629c4_joejoe.jpg?auto=compress,format'
						}
						title={"CSM Community - Joe's Steam Rice Rolls"}
						location={''}
					/>
					<FeaturedCard
						imgSrc={
							'https://images.prismic.io/canalstreetmarket/b41fd97ada7c19360a17c6007020ddcc3aba6b6f_002-1.jpg?auto=compress,format'
						}
						title={'CSM Community - Bereop Tech'}
						location={''}
					/>
					<FeaturedCard
						imgSrc={
							'https://images.prismic.io/canalstreetmarket/fe8a44c7efc3e71cd5443ec833069561bd3ff1a7_01-1.jpg?auto=compress,format'
						}
						title={'CSM Community - Izakaya'}
						location={''}
					/>
				</section>

				<section className='footer-section'>
					<Footer />
				</section>
			</div>
		</div>
	)
}
