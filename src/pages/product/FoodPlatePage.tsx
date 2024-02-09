import { useEffect, useRef } from 'react'
import ramen from '../../assets/ramen.svg'
import PageAnnouncement from '../../components/announcement/PageAnnouncement'
import ProductCard from '../../components/cards/ProductCard'
import Footer from '../../components/footer/Footer'
import ImagesDisplay from '../../components/imagesDisplay/ImagesDisplay'
import ProductPageTitle from '../../components/pageTitle/ProductPageTitle'
import { foodPlates } from '../../constants/constants'
import { findProductsByName } from '../../utils/findProductByName'
import './allProducts.css'

export default function FoodPage({ name }: { name: string }) {
	const plate = findProductsByName(foodPlates, name)

	const wrapperRef = useRef<HTMLDivElement | null>(null)

	const topRef = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		wrapperRef.current?.classList.remove('fading-in')
		topRef.current?.scrollIntoView()
		wrapperRef.current?.classList.add('fading-in')
	}, [name])

	return (
		<div className='product-info-page plates-page' ref={topRef}>
			{plate && (
				<div className='animation-wrapper' ref={wrapperRef}>
					<section className='hero-section'>
						<ProductPageTitle
							name={plate.name}
							description={plate.description}
							time={'Food Hall Hours:\nMon - Sun: 11:00AM - 8:00PM'}
							imgSrc={plate.principalPhoto}
							backLocation={'/food'}
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

					<section className='more-plates-section'>
						{foodPlates
							.filter((foodPlate) => foodPlate !== plate)
							.map((plate) => (
								<ProductCard
									key={plate.id}
									route={'food'}
									type={plate.type}
									name={plate.name}
									imgSrc={plate.principalPhoto}
								/>
							))}
					</section>

					<section className='footer-section'>
						<Footer />
					</section>
				</div>
			)}
		</div>
	)
}
