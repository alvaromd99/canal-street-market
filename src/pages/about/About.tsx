import { useRef } from 'react'
import NormalBtn from '../../components/btn/NormalBtn'
import Card from '../../components/cards/Card'
import MarketEventsPanel from '../../components/events/MarketEventsPanel'
import Footer from '../../components/footer/Footer'
import { AboutEventsInfo } from '../../constants/constants'
import { UseIntersectionObserver } from '../../hooks/UseIntersectionObserver'
import './About.css'

export default function About() {
	const imageRef = useRef(null)
	const marketsRef = useRef(null)

	UseIntersectionObserver([imageRef, marketsRef])

	return (
		<div className='about-page page'>
			<section className='title-section'>
				<h1>
					{
						'Canal Street Market is a carefully curated retail market, food hall & community space open year-round at 265 Canal Street. '
					}
					<a href=''>Support Small Business</a>
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

			<section className='cards-section' ref={marketsRef}>
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
					<MarketEventsPanel eventsInfo={AboutEventsInfo} />
					<div className='btn-wrapper'>
						<NormalBtn text={'see all'} newLocation={'/community/event'} />
					</div>
				</div>
			</section>

			<section className='address-section'>
				<a href='https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427'>
					<div className='address-text'>
						<h3>265 Canal St. New York, NY</h3>
					</div>
				</a>
				<a href='https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427'>
					<div className='address-img'>
						<img
							src='https://images.prismic.io/canalstreetmarket/74921c6bf0abf767666c52a6af3c001c58643587_group-11.jpg?auto=compress,format'
							alt='Maps photo'
						/>
					</div>
				</a>
			</section>

			<section className='footer-section'>
				<Footer />
			</section>
		</div>
	)
}
