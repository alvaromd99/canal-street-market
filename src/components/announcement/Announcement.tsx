import './announcement.css'

interface AnnouncementProps {
	svgSrc: string
	alt: string
}

export default function Announcement({ svgSrc, alt }: AnnouncementProps) {
	return (
		<div className='announcement-wrapper'>
			<div>
				<img src={svgSrc} alt={`${alt} svg`} />
			</div>
			<div className='announcement-text'>
				<h3>The Best of NYC</h3>
				<p>All under one roof!</p>
			</div>
			<div>
				<img src={svgSrc} alt={`${alt} svg`} />
			</div>
		</div>
	)
}
