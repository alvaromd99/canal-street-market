import rose from '../../assets/rose.svg'
import Announcement from '../../components/announcement/Announcement'
import ProductCard from '../../components/cards/ProductCard'
import Footer from '../../components/footer/Footer'
import PageTitle from '../../components/pageTitle/PageTitle'
import { retailObjects } from '../../constants/constants'
import './retail.css'

export default function Retail() {
	return (
		<div className='retail-page page'>
			<section className='hero-section'>
				<PageTitle
					name='Retail'
					title='The Retail Market'
					text={'Retail Market Hours:\nThrus - Sun: 11:00AM - 7:00PM'}
					letter='購物'
					imgSrc='https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress,format'
				/>
			</section>

			<section className='products-section'>
				{retailObjects.map((retailObj) => (
					<ProductCard
						route={'retail'}
						key={retailObj.id}
						type={retailObj.type}
						name={retailObj.name}
						imgSrc={retailObj.principalPhoto}
					/>
				))}
			</section>

			<section className='announcement-section'>
				<Announcement
					svgSrc={rose}
					alt={'Rose'}
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
