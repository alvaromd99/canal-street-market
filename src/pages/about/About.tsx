import { useRef } from 'react'
import './About.css'
import { UseIntersectionObserver } from '../../hooks/UseIntersectionObserver'
import Card from '../../components/card/Card'
import MarketEvent from '../../components/market/MarketEvent'

export default function About() {
	const imageRef = useRef(null)

	UseIntersectionObserver([imageRef])

	return (
		<div className='about-page'>
			<section className='title-section'>
				<h1>
					{
						'Canal Street Market is a carefully curated retail market, food hall & community space open year-round at 265 Canal Street. '
					}
					<a href=''> Support Small Business </a>
					{' this weekend!'}
				</h1>
			</section>
			<section className='image-section' ref={imageRef}>
				<img
					src='https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format'
					alt='image1'
				/>
			</section>
			<section className='subtitle-section'>
				<h2>A New Kind of Market</h2>
			</section>
			<section className='cards-section'>
				<Card
					src='https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg?auto=compress,format&quot'
					alt='Market image 1'
					text='Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.'
				/>
				<Card
					src='https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress,format'
					alt='Market image 2'
					text={'Retail Market Hours:\nThursday - Sun: 11:00AM - 7:00PM'}
				/>
				<Card
					src='https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format'
					alt='Market image 3'
					text={'Food Hall Hours:\nMon - Sun: 11:00AM - 8:00PM'}
				/>
			</section>
			<section className='events-section'>
				<div className='events-title'>
					<p>活動</p>
					<h3>{'Market\nEvents'}</h3>
					<p>活動</p>
				</div>
				<div className='events-info'>
					<div className='events-wrapper'>
						<MarketEvent
							eventDate='09/21'
							eventInfo='Small Business Retail Pop Up Weekend!'
						/>
						<MarketEvent
							eventDate='02/07'
							eventInfo='New Balance x Paperboy Paris by Greenhouse @ Canal Street Market'
						/>
						<MarketEvent eventDate='12/11' eventInfo='Hack City 12/11' />
					</div>
				</div>
			</section>
		</div>
	)
}
