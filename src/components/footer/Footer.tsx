import NormalBtn from '../btn/NormalBtn'
import FooterLegal from './FooterLegal'
import FooterLinks from './FooterLinks'
import './footer.css'

export default function Footer() {
	return (
		<>
			<div className='footer-title'>
				<h3>Interested in becoming a vendor ?</h3>
				<NormalBtn text='click here' pad={1} newLocation={''} />
			</div>
			<FooterLinks />
			<div className='footer-legal'>
				<FooterLegal />
			</div>
		</>
	)
}
