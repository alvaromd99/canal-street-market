import MarketEvent from '../../components/market/MarketEvent'
import PageTitle from '../../components/pageTitle/PageTitle'
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
		</div>
	)
}
