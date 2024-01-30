import './card.css'

interface ContactCardProps {
	imgSrc: string
	text: string
}

export default function ContactCard({ imgSrc, text }: ContactCardProps) {
	return (
		<div className='contact-card'>
			<img src={imgSrc} alt='Icon' />
			<p>{text}</p>
		</div>
	)
}
