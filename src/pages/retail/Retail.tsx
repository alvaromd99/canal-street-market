import PageTitle from '../../components/pageTitle/PageTitle'
import './retail.css'

export default function Retail() {
	return (
		<div className='retail-page'>
			<section className='hero-section'>
				<PageTitle
					name='Retail'
					title='Retail Market'
					time='Thrus - Sun: 11:00AM - 7:00PM'
					letter='購物'
					imgSrc='https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress,format'
				/>
			</section>
		</div>
	)
}
