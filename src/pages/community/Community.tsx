import HeadSvg from '../../assets/head.svg'
import Announcement from '../../components/announcement/Announcement'
import NormalBtn from '../../components/btn/NormalBtn'
import FeaturedCard from '../../components/cards/FeaturedCard'
import MarketEventsPanel from '../../components/events/MarketEventsPanel'
import Footer from '../../components/footer/Footer'
import MarketEvent from '../../components/market/MarketEvent'
import PageTitle from '../../components/pageTitle/PageTitle'
import {
	CommunityEventsInfo,
	communityFeatures,
} from '../../constants/constants'
import './community.css'

export default function Community() {
	return (
		<div className='community-page'>
			<section className='hero-section'>
				<PageTitle
					name={'Community'}
					title={'Canal St. Community'}
					text={
						'Our mixed-use space hosts ongoing events, podcasts & artists in residence.'
					}
					letter={'文化'}
					imgSrc={
						'https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg?auto=compress,format'
					}
				/>
			</section>

			<section className='market-events-section'>
				<h2>Market Events</h2>
				<div className='events-grid'>
					<MarketEvent
						eventDate='09/11 (past)'
						eventInfo='Small Business Retail Pop Up Weekend!'
					/>
					<div></div>
					<div></div>
					<MarketEvent
						eventDate='02/07 (past)'
						eventInfo='New Balance x Paperboy Paris by Greenhouse @ Canal Street Market'
					/>
					<MarketEvent eventDate='12/11(past)' eventInfo='Hack City 12/11' />
					<div></div>
					<div></div>
					<MarketEvent eventDate='07/27 (past)' eventInfo='Taiwanese Wave' />
				</div>
			</section>

			<section className='btn-wrapper' style={{ marginTop: '4rem' }}>
				<NormalBtn text={'view all'} newLocation={''} />
			</section>

			<section className='features-section'>
				<h2>Features</h2>
				<div className='features-grid'>
					{communityFeatures.map((feature, index) => (
						<FeaturedCard
							key={index}
							imgSrc={feature.principalPhoto}
							title={feature.communityName}
							location={`/community/feature/${feature.location}`}
						/>
					))}
				</div>
			</section>

			<section className='btn-wrapper'>
				<NormalBtn
					text={'view all stories'}
					newLocation={'/community/feature'}
				/>
			</section>

			<section className='announcement-section'>
				<Announcement
					svgSrc={HeadSvg}
					alt={'Head svg'}
					title={'Market Radio'}
					subtitle={'Podcast from the market'}
				/>
			</section>

			<section className='events-section'>
				<MarketEventsPanel eventsInfo={CommunityEventsInfo} />
				<div className='events-btn-wrapper'>
					<NormalBtn text={'see all'} newLocation={''} />
				</div>
			</section>

			<section className='footer-section'>
				<Footer />
			</section>
		</div>
	)
}
