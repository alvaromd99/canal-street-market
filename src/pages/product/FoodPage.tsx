import BackBtn from '../../components/btn/BackBtn'
import { foodPlates } from '../../constants/constants'
import { findProductsByName } from '../../utils/findProductByName'
import './allProducts.css'

export default function FoodPage({ name }: { name: string }) {
	const plate = findProductsByName(foodPlates, name)
	console.log(plate)

	return (
		<div className='product-info-page plates-page'>
			{plate && (
				<section className='hero-section'>
					<div className='hero-left'>
						<BackBtn text={'all food'} location={'/food'} />
						<h2>{plate.name}</h2>
						<p>{plate.description}</p>
					</div>
					<div className='hero-right'>
						<p>
							Food Hall Hours:
							<br />
							Mon - Sun: 10AM- 8PM
						</p>
						<img src={plate.principalPhoto} alt='plate photo' />
					</div>
				</section>
			)}
		</div>
	)
}
