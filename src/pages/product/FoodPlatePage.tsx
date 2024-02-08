import PageAnnouncement from '../../components/announcement/PageAnnouncement'
import ImagesDisplay from '../../components/imagesDisplay/ImagesDisplay'
import ProductPageTitle from '../../components/pageTitle/ProductPageTitle'
import { foodPlates } from '../../constants/constants'
import { findProductsByName } from '../../utils/findProductByName'
import './allProducts.css'
import ramen from '../../assets/ramen.svg'

export default function FoodPage({ name }: { name: string }) {
	const plate = findProductsByName(foodPlates, name)

	return (
		<div className='product-info-page plates-page'>
			{plate && (
				<>
					<section className='hero-section'>
						<ProductPageTitle
							name={plate.name}
							description={plate.description}
							time={'Food Hall Hours:\nMon - Sun: 11:00AM - 8:00PM'}
							imgSrc={plate.principalPhoto}
						/>
					</section>

					<section className='images-section'>
						<ImagesDisplay imagesArr={plate.secondaryPhotos} />
					</section>

					<section className='announcement-section'>
						<PageAnnouncement
							svgSrc={ramen}
							alt={'Ramen svg'}
							title={'More Food'}
						/>
					</section>
				</>
			)}
		</div>
	)
}
