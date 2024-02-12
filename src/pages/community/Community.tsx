import HeadSvg from '../../assets/head.svg'
import Announcement from '../../components/announcement/Announcement'
import NormalBtn from '../../components/btn/NormalBtn'
import FeaturedCard from '../../components/cards/FeaturedCard'
import MarketEventsPanel from '../../components/events/MarketEventsPanel'
import Footer from '../../components/footer/Footer'
import MarketEvent from '../../components/market/MarketEvent'
import PageTitle from '../../components/pageTitle/PageTitle'
import { CommunityEventsInfo } from '../../constants/constants'
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
				<NormalBtn text={'view all'} pad={1.2} newLocation={''} />
			</section>

			<section className='features-section'>
				<h2>Features</h2>
				<div className='features-grid'>
					<FeaturedCard
						imgSrc={
							'https://images.prismic.io/canalstreetmarket/ad63bd2481b47c4b95e0ce8eb265658541ace7f4_001-1-1.jpg?auto=compress,format'
						}
						title={'CSM Community - AMDC'}
						location={'/community/feature/amdc'}
					/>
					<FeaturedCard
						imgSrc={
							'https://images.prismic.io/canalstreetmarket/9c41db6b59d689aeda46a6a6405d8767649629c4_joejoe.jpg?auto=compress,format'
						}
						title={"CSM Community - Joe's Steam Rice Rolls"}
						location={'/community/feature/joe-rong'}
					/>
					<FeaturedCard
						imgSrc={
							'https://images.prismic.io/canalstreetmarket/b41fd97ada7c19360a17c6007020ddcc3aba6b6f_002-1.jpg?auto=compress,format'
						}
						title={'CSM Community - Bereop Tech'}
						location={'/community/feature/csm-community'}
					/>
					<FeaturedCard
						imgSrc={
							'https://images.prismic.io/canalstreetmarket/fe8a44c7efc3e71cd5443ec833069561bd3ff1a7_01-1.jpg?auto=compress,format'
						}
						title={'CSM Community - Izakaya'}
						location={'/community/feature/csm-community---izakaya'}
					/>
				</div>
			</section>

			<section className='btn-wrapper'>
				<NormalBtn
					text={'view all stories'}
					pad={1.2}
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
					<NormalBtn text={'see all'} pad={1.2} newLocation={''} />
				</div>
			</section>

			<section className='footer-section'>
				<Footer />
			</section>
		</div>
	)
}
