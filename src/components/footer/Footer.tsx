import NormalBtn from '../btn/NormalBtn'
import './footer.css'

export default function Footer() {
	return (
		<>
			<div className='footer-title'>
				<h3>Interested in becoming a vendor ?</h3>
				<NormalBtn text='click here' pad={1} />
			</div>
			<div className='footer-links'>Links</div>
			<div className='footer-newsletter'>Newsletter</div>
		</>
	)
}
