import './card.css'

interface CardProps {
	src: string
	alt: string
	text: string
}

export default function Card({ src, alt, text }: CardProps) {
	return (
		<div className='card'>
			<img src={src} alt={alt} />
			<p>{text}</p>
		</div>
	)
}
