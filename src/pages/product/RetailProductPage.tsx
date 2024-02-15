import { useEffect, useRef } from 'react'
import rose from '../../assets/rose.svg'
import PageAnnouncement from '../../components/announcement/PageAnnouncement'
import ProductCard from '../../components/cards/ProductCard'
import Footer from '../../components/footer/Footer'
import ImagesDisplay from '../../components/imagesDisplay/ImagesDisplay'
import ProductPageTitle from '../../components/pageTitle/ProductPageTitle'
import { retailObjects } from '../../constants/constants'
import { findProductsByName } from '../../utils/findProductByName'
import './allProducts.css'

export default function FoodPage({ name }: { name: string }) {
	const retailObject = findProductsByName(retailObjects, name)

	const topRef = useRef<HTMLDivElement | null>(null)
	const wrapperRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		wrapperRef.current?.classList.remove('fading-in')
		topRef.current?.scrollIntoView()
		wrapperRef.current?.classList.add('fading-in')
	}, [name])

	return (
		<div className='product-info-page retail-objects-page' ref={topRef}>
			{retailObject && (
				<div className='animation-wrapper' ref={wrapperRef}>
					<section className='hero-section'>
						<ProductPageTitle
							name={retailObject.name}
							description={retailObject.description}
							time={'Food Hall Hours:\nMon - Sun: 11:00AM - 8:00PM'}
							imgSrc={retailObject.principalPhoto}
							backLocation={'/retail'}
							btnText={'all retail'}
						/>
					</section>

					<section className='images-section'>
						<ImagesDisplay imagesArr={retailObject.secondaryPhotos} />
					</section>

					<section className='announcement-section'>
						<PageAnnouncement
							svgSrc={rose}
							alt={'Rose svg'}
							title={'More Food'}
						/>
					</section>

					<section className='more-plates-section'>
						{retailObjects
							.filter((object) => object !== retailObject)
							.map((object) => (
								<ProductCard
									key={object.id}
									route={'retail'}
									type={object.type}
									name={object.name}
									imgSrc={object.principalPhoto}
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
