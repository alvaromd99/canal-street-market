import './pageTitle.css'

interface PageTitleProps {
	name: string
	title: string
	time: string
	letter: string
	imgSrc: string
}

export default function PageTitle({
	name,
	title,
	time,
	letter,
	imgSrc,
}: PageTitleProps) {
	return (
		<>
			<div className='hero-title'>
				<p>
					{name} <span>{'\u21E2'}</span>
				</p>
				<h1>{`The ${title}`}</h1>
			</div>
			<div className='hero-image'>
				<div className='image-text'>
					<p>
						{`${title} Hours:`}
						<br />
						{time}
					</p>
					<p>{letter}</p>
				</div>
				<img src={imgSrc} alt={`${title} image`} loading='lazy' />
			</div>
		</>
	)
}
