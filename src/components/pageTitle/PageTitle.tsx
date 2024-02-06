import './pageTitle.css'

interface PageTitleProps {
	name: string
	title: string
	text: string
	letter: string
	imgSrc: string
}

export default function PageTitle({
	name,
	title,
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
				<h1>{title}</h1>
			</div>
			<div className='hero-image'>
				<div className='image-text'>
					<p>{text}</p>
					<p>{letter}</p>
				</div>
				<img src={imgSrc} alt={`${title} image`} loading='lazy' />
			</div>
		</>
	)
}
