import './pageAnnouncement.css'

interface PageAnnouncementProps {
	svgSrc: string
	alt: string
	title: string
}

export default function PageAnnouncement({
	svgSrc,
	alt,
	title,
}: PageAnnouncementProps) {
	return (
		<div className='page-announcement-wrapper'>
			<div>
				<img src={svgSrc} alt={`${alt} svg`} />
			</div>
			<div className='page-announcement-text'>
				<h3>{title}</h3>
			</div>
			<div>
				<img src={svgSrc} alt={`${alt} svg`} />
			</div>
		</div>
	)
}
