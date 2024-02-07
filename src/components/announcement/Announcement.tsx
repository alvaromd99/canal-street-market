import './announcement.css'

interface AnnouncementProps {
	svgSrc: string
	alt: string
	title: string
	subtitle: string
}

export default function Announcement({
	svgSrc,
	alt,
	title,
	subtitle,
}: AnnouncementProps) {
	return (
		<div className='announcement-wrapper'>
			<div>
				<img src={svgSrc} alt={`${alt} svg`} />
			</div>
			<div className='announcement-text'>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</div>
			<div>
				<img src={svgSrc} alt={`${alt} svg`} />
			</div>
		</div>
	)
}
