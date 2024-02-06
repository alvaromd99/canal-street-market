import './featuredCard.css'

interface FeaturedCardProps {
	imgSrc: string
	title: string
}

export default function FeaturedCard({ imgSrc, title }: FeaturedCardProps) {
	return (
		<div className='feature-card'>
			<img src={imgSrc} alt='' />
			<h4>
				<span>{title}</span>
			</h4>
		</div>
	)
}
