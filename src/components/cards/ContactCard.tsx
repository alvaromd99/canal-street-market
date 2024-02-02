import './contactCard.css'

interface ContactCardProps {
	imgSrc: string
	text: string
	link: string
}

export default function ContactCard({ imgSrc, text, link }: ContactCardProps) {
	return (
		<a href={link} target='_blank' className='contact-card'>
			<img src={imgSrc} alt='Icon' />
			<p>{text}</p>
		</a>
	)
}
