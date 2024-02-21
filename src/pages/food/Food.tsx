import face from '../../assets/smileFace.svg'
import Announcement from '../../components/announcement/Announcement'
import ProductCard from '../../components/cards/ProductCard'
import Footer from '../../components/footer/Footer'
import PageTitle from '../../components/pageTitle/PageTitle'
import { foodPlates } from '../../constants/constants'
import './food.css'

export default function Food() {
	return (
		<div className='food-page page'>
			<section className='hero-section'>
				<PageTitle
					name='Food'
					title='The Food Hall'
					text={'Food Hall Hours:\nMon - Sun: 11:00AM - 8:00PM'}
					letter='餐饮'
					imgSrc='https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format'
				/>
			</section>

			<section className='plates-section'>
				{foodPlates.map((plate) => (
					<ProductCard
						key={plate.id}
						route={'food'}
						type={plate.type}
						name={plate.name}
						imgSrc={plate.principalPhoto}
					/>
				))}
			</section>

			<section className='announcement-section'>
				<Announcement
					svgSrc={face}
					alt={'Smile Face'}
					title={'The Best of NYC'}
					subtitle={'All under one roof'}
				/>
			</section>

			<section className='footer-section'>
				<Footer />
			</section>
		</div>
	)
}
