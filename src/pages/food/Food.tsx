import FoodCard from '../../components/cards/FoodCard'
import { foodPlates } from '../../constants/constants'
import './food.css'

export default function Food() {
	return (
		<div className='food-page'>
			<section className='hero-section'>
				<div className='hero-title'>
					<p>
						Food <span>{'\u21E2'}</span>
					</p>
					<h1>The Food Hall</h1>
				</div>
				<div className='hero-image'>
					<div className='image-text'>
						<p>
							Food Hall Hours:
							<br />
							Mon – Sun: 11:00AM - 8:00PM
						</p>
						<p>餐饮</p>
					</div>
					<img
						src='https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format'
						alt='Food img 1'
					/>
				</div>
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
