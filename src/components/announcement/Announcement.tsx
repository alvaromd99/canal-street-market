import './announcement.css'
import face from '../../assets/smileFace.svg'

export default function Announcement() {
	return (
		<div className='announcement-wrapper'>
			<div>
				<img src={face} alt='Smile face svg' />
			</div>
			<div className='announcement-text'>
				<h3>The Best of NYC</h3>
				<p>All under one roof!</p>
			</div>
			<div>
				<img src={face} alt='Smile face svg' />
			</div>
		</div>
	)
}
