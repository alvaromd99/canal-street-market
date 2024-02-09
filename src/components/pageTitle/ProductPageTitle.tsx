import BackBtn from '../btn/BackBtn'
import './productPageTitle.css'

interface ProductPageTitleProps {
	name: string
	description: string
	time: string
	imgSrc: string
	backLocation: string
}

export default function ProductPageTitle({
	name,
	description,
	time,
	imgSrc,
	backLocation,
}: ProductPageTitleProps) {
	return (
		<>
			<div className='hero-left'>
				<BackBtn text={'all food'} location={backLocation} />
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
			<div className='hero-right'>
				<p>{time}</p>
				{imgSrc !== '' && <img src={imgSrc} alt='plate photo' />}
			</div>
		</>
	)
}
