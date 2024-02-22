import './singleEventPageTitle.css'

interface SingleEventPageTitleProps {
	date: string
	time?: string
	title: string
	description: string
	imgSrc: string
}

export default function SingleEventPageTitle({
	date,
	time,
	title,
	description,
	imgSrc,
}: SingleEventPageTitleProps) {
	return (
		<div className='title-wrapper'>
			<div className='left-section'>
				<div className='date-time'>
					<p>{date}</p>
					<p>{time}</p>
				</div>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className='right-section'>
				<img src={imgSrc} alt='Event image' />
			</div>
		</div>
	)
}
