import './pageTitle.css'

interface PageTitleProps {
	name: string
	title: string
	time?: string
	text?: string
	letter: string
	imgSrc: string
}

export default function PageTitle({
	name,
	title,
	time,
	text,
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
					{time && (
						<p>
							{`${title} Hours:`}
							<br />
							{time}
						</p>
					)}
					{text && <p>{text}</p>}
					<p>{letter}</p>
				</div>
				<img src={imgSrc} alt={`${title} image`} loading='lazy' />
			</div>
		</>
	)
}
