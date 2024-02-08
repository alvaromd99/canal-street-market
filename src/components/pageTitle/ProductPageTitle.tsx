import BackBtn from '../btn/BackBtn'
import './productPageTitle.css'

interface ProductPageTitleProps {
	name: string
	description: string
	time: string
	imgSrc: string
}

export default function ProductPageTitle({
	name,
	description,
	time,
	imgSrc,
}: ProductPageTitleProps) {
	return (
		<>
			<div className='hero-left'>
				<BackBtn text={'all food'} location={'/food'} />
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
			<div className='hero-right'>
				<p>{time}</p>
				<img src={imgSrc} alt='plate photo' />
			</div>
		</>
	)
}
