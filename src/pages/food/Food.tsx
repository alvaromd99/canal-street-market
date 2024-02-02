import FoodCard from '../../components/cards/FoodCard'
import PageTitle from '../../components/pageTitle/PageTitle'
import { foodPlates } from '../../constants/constants'
import './food.css'

export default function Food() {
	return (
		<div className='food-page'>
			<section className='hero-section'>
				<PageTitle
					name='Food'
					title='Food Hall'
					time='Mon - Sun: 11:00AM - 8:00PM'
					letter='餐饮'
					imgSrc='https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format'
				/>
			</section>

			<section className='plates-section'>
				{foodPlates.map((plate) => (
					<FoodCard
						key={plate.id}
						type={plate.type}
						name={plate.name}
						imgSrc={plate.principalPhoto}
					/>
				))}
			</section>
		</div>
	)
}
